// import { combineReducers } from 'redux'
// import todos from './todos'
// import visibilityFilter from './visibilityFilter'

const initialState = {
  loginState: 0,
  currentDialog: "string",
  userId: 1,
  "messages": [
    {
      id: "123",
      author: "1",
      text: "My first message!",
      date: new Date(),
      dialogId: "string"
    }
  ],
  "dialogs": [
    {
      users: [1,2],
      id: "string"
    }
  ],
  "users": [
    { "id": "1", "name": "Paul" },
    { "id": "2", "name": "Nicole" }
  ]
}

function chatApp(state = initialState, action) {
  switch (action.type) {
    case "SET_LOGIN_STATE":
      return { ...state, loginState: action.userId}
    default:

  }
  return state;
}

export default chatApp
