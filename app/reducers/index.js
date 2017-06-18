// import { combineReducers } from 'redux'
// import todos from './todos'
// import visibilityFilter from './visibilityFilter'

const initialState = {
  currentDialog: null,
  userId: 1, //userId==-1 means you are logged out
  webSocket: null,
  showUserList: false,
  "messages": [
    // {
    //   id: "123",
    //   author: "1",
    //   text: "My first message!",
    //   date: new Date(),
    //   dialogId: "string"
    // }
  ],
  "dialogs": [
    // {
    //   users: [1,2],
    //   id: "string"
    // }
  ],
  "users": [
    // { "id": "1", "name": "Paul" },
    // { "id": "2", "name": "Nicole" }
  ]
}

function chatApp(state = initialState, action) {
  switch (action.type) {
    case "SET_WEBSOCKET":
      return { ...state, webSocket: action.webSocket}
    case "SET_SHOW_USERLIST":
      return { ...state, showUserList: action.val}
    case "SET_USERLIST":
      return { ...state, users: action.list}
    case "SET_DIALOGLIST":
      return { ...state, dialogs: action.list}
    case "SET_USERID":
      return { ...state, userId: action.id}
    case "SET_CURRENT_DIALOG":
      return { ...state, currentDialog: action.dialog}
    case "APPEND_MESSAGES":
      return { ...state, messages: action.messages}
    case "SET_STATE":
      return { ...state, ...action.state}
    default:

  }
  return state;
}

export default chatApp
