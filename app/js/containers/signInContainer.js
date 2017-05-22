import {connect} from 'react-redux';
import {setLoginStateAction} from '../actions';
import SignIn from "../components/signIn";

function signIn(dispatch) {
  new Promise((resolve, reject) => {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
          resolve(this.responseText);
      } else if (this.readyState == 4 && this.status == 401) {
        reject("Username or password is incorrect");
      }
    };
    xhttp.open("POST", "http://localhost:3001/auth", true);
    let username = document.getElementById('username').value;
    let pass = document.getElementById('password').value;
    var params = `username=${username}&password=${pass}`;
    // var params = `username=xineman&password=air228`;
    xhttp.send(params);
  }).then((successMessage) => {
    if (successMessage==-1)
      dispatch(setLoginStateAction(1));
    else
      dispatch(setLoginStateAction(2));

    // var webSocket = new WebSocket("ws://localhost:3001/chat/?login=fff");
    // webSocket.onmessage = function (msg) { console.log(msg.data) };
    // webSocket.onclose = function () { alert("WebSocket connection closed") };
    // console.log("Yay! " + successMessage);
  })
  .catch((reason) => {
    console.log(reason);
  });
}

const mapDispatchToProps = (dispatch) => {
  return {
    signInClick: () => {
      signIn(dispatch);
    }
  }
}
const SignInContainer = connect(
  null,
  mapDispatchToProps
)(SignIn);

export default SignInContainer
