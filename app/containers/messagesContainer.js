import {connect} from 'react-redux';
import {setLoginStateAction} from '../actions';
import MessageList from "../components/messageList";

const mapStateToProps = (state) => {
  return {
    userId: state.userId,
    messages: state.messages,
    dialog: state.currentDialog//messagesForDialog()
  }
}
function messagesForDialog() {
  // let users = atob(state.currentDialog).split("+");
  // let mate;
  // if (users[0]===state.userId)
  //   mate=users[1]
  //   else
  //   mate=users[0]
  let messages = [];
  for (let message of state.messages) {
    if (message.dialogId==state.currentDialog)
      messages.push(message);
  }
  console.log(messages);
  return messages;
}
const mapDispatchToProps = (dispatch) => {
  return {
    setState: (id) => {
      dispatch(setLoginStateAction(id))
    }
  }
}
const MessagesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageList);

export default MessagesContainer
