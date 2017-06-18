import { ajax } from "../utils";

export const setState = (state) => {
  return {
    type: "SET_STATE",
    state: state
  }
}

export const setWebSocket = (webSocket) => {
  return {
    type: "SET_WEBSOCKET",
    webSocket: webSocket
  }
}

export const showUserList = (val) => {
  return {
    type: "SET_SHOW_USERLIST",
    val: val
  }
}

export const setUserList = (list) => {
  return {
    type: "SET_USERLIST",
    list: list
  }
}

export const setDialogList = (list) => {
  return {
    type: "SET_DIALOGLIST",
    list: list
  }
}

export const setUserId = (id) => {
  return {
    type: "SET_USERID",
    id: id
  }
}

export const setCurrentDialog = (id) => {
  return {
    type: "SET_CURRENT_DIALOG",
    dialog: id
  }
}

export const setMessages = (list) => {
  return {
    type: "APPEND_MESSAGES",
    messages: list
  }
}

export function setupWebSocket() {
  return (dispatch, getState) => {
    if (getState().userId!=-1 && !getState().webSocket) {
      var webSocket = new WebSocket("ws://" + window.location.host + "/chat/");
      webSocket.onmessage = (msg) => {
        console.log("Received message");
        let data = JSON.parse(msg.data);
        if (data.error)
          console.log(data)
        else {
          if (data.users)
            dispatch(setUserList(data.users));
          if (data.dialogs)
            dispatch(setDialogList(data.dialogs));
          if (data.messages)
            dispatch(setMessages(data.messages));
        }
      };
      webSocket.onclose = function () { console.log("WebSocket connection closed"); };
      dispatch(setWebSocket(webSocket));
    }
  }
}

export function getDialog(number) {
  return (dispatch, getState) => {
    let users = getState().dialogs.find((dialog) => dialog.id==number).users;
    let cu = getState().userId;
    let id = (users[0]==getState().userId?users[1]:users[0]);
    ajax("http://" + window.location.host + "/dialog", "POST", {id})
      .then((success) => {
        let response = JSON.parse(success);
        console.log(response);
        if (!response.error) {
          dispatch(setState(response.data));
          dispatch(setCurrentDialog(response.requested));
        }
      });
  }
}
