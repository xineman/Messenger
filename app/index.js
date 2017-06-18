const express = require("express");
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser');
var atob = require('atob');
var btoa = require('btoa');
var session = require('express-session');

//Development
const webpackDevMiddleware = require("webpack-dev-middleware");
const webpack = require("webpack");
const webpackConfig = require("../webpack.config");
var compiler = webpack(webpackConfig);

import { renderToString } from 'react-dom/server'
import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import chatApp from './reducers'
import App from './components/app'
import model from './data'

var connectedUsers = [];
var app = express();
var expressWs = require('express-ws')(app);

app.use(webpackDevMiddleware(compiler, {
  publicPath: "/js" // Same as `output.publicPath` in most cases.
}));

// app.use(session({ saveUninitialized: true, secret: 'hoolie chat', cookie: { maxAge: 60000 }}))
app.use(cookieParser());
app.use(bodyParser.json()); // for parsing application/json
app.use(express.static('app/public'));;

app.ws('/chat/', function(ws, req) {
  ws.on('message', function(msg) {
    let data = JSON.parse(msg);
    model.messages.push({
      id: model.messages.length,
      sender: findUserByToken(req.cookies.token).id,
      time: Date.now(),
      text: data.message,
      dialogId: data.dialog
    });
    let users = findDialogById(data.dialog).users;
    let cc = expressWs.getWss().clients;
    broadcastMessage(
      connectedUsers.filter(connected => ~users.indexOf(connected.user.id)),
      getMessagesForDialog(data.dialog)
    );

  });
  ws.on("close", () => {
    console.log("User disconnected");
    connectedUsers.splice(connectedUsers.indexOf(connectedUsers.find(conn => conn.socket==ws)), 1);
    broadcastMessage(connectedUsers);
  });
  //Add to set
  connectedUsers.push({
    user: findUserByToken(req.cookies.token),
    socket: ws
  });
  broadcastMessage(connectedUsers);
});


app.get('/', (req, res) => {
  let preloadedState = {}
  let user;
  //TODO Use sessions instead of tokens
  // let sess = req.session;
  // if (sess.token) {
  //   user = findUserByToken(sess.token);
  // }

  if (req.cookies && req.cookies.token) {
    user = findUserByToken(req.cookies.token);
  }
  if (user) {
    preloadedState = getDataObject(user.id);
  } else {
    preloadedState.userId = -1;
  }
  const store = createStore(chatApp, preloadedState)
  const html = renderToString(
    <Provider store={store}>
      <App />
    </Provider>
  )
  const finalState = store.getState();
  res.send(renderFullPage(html, finalState));
});

//TODO Use sessions instead of tokens
app.post("/login", (req, res) => {
  let user = validateUser(req.body.username, req.body.password);
  if (user){
    // req.session.token = btoa(req.body.username+"+"+req.body.password)
    res.cookie("token", btoa(req.body.username+"+"+req.body.password));
    let response = getDataObject(user.id);
    res.send(response);
  } else
    res.send({error: "Wrong credentials"});
});

app.get("/logout", (req, res) => {
  res.cookie("token", "", {expires: new Date(0)});
  res.redirect("/");
});

app.post("/dialog", (req, res) => {
  let userId = findUserByToken(req.cookies.token).id;
  let users = [req.body.id, userId];
  let dialogId = findDialogByUsers(users).id;
  res.send({
    data: getDataObject(userId, getMessagesForDialog(dialogId)),
    requested: dialogId})
  broadcastMessage(
    connectedUsers.filter(connected => ~users.indexOf(connected.user.id)),
    getMessagesForDialog(dialogId)
  );
});

app.listen(3000, function () {
  console.log("Listening on port 3000!");
});

//serverside rendering
function renderFullPage(html, preloadedState) {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <!-- build:css -->
        <link rel="stylesheet" href="css/styles.css">
        <!-- endbuild -->
        <title>Chat</title>
      </head>
      <body>
        <div id="root">${html}</div>
        <script>
            // WARNING: See the following for security issues around embedding JSON in HTML:
            // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
            window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
        </script>
        <!-- build:js -->
        <script src="js/manifest.js" charset="utf-8"></script>
        <script src="js/libs.js" charset="utf-8"></script>
        <script src="js/main.js" charset="utf-8"></script>
        <!-- endbuild -->
      </body>
    </html>
  `
}

//stringify and send json to connected clients and if needed include messages
function broadcastMessage(connections, messages) {
  for (var client of connections) {
    client.socket.send(JSON.stringify(getDataObject(client.user.id, messages)));
  }
}

//create model individually for every user, and if needed include messages
function getDataObject(userId, messages) {
  let response = {
    userId: userId,
    dialogs: model.dialogs.filter(dialog => ~dialog.users.indexOf(userId)),
    users: model.users.map(user =>({
      id: user.id,
      username:user.username,
      name: user.name,
      online: (connectedUsers.find(connected =>{
        let uid = connected.user.id;
        return uid==user.id
      })?true:false)
    }))
  }
  if (messages)
    response.messages = messages;
  return response;
}

//returns messages array
function getMessagesForDialog(id) {
  return model.messages.filter(message => message.dialogId == id);
}

//find dialog for users or create if this doesn't exist
function findDialogByUsers(users) {
  if (users[0]<users[1]){
    let user = users[0];
    users[0] = users[1];
    users[1] = user;
  }
  let id = btoa(users[0]+"+"+users[1]);
  let dialog = findDialogById(id);
  if (!dialog) {
    dialog = {users, id};
    model.dialogs.push(dialog);
  }
  return dialog;
}

//returns dialog by its id
function findDialogById(number) {
  return model.dialogs.find(dialog => dialog.id==number);
}

//returns user object
function findUserByToken(token) {
  let data = atob(token).split("+");
  return validateUser(data[0], data[1]);
}

//returns user object or undefined if was not found
function validateUser(login, password) {
  return model.users.find((user) => user.username==login&&user.password==password);
}
