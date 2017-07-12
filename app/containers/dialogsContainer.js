import {connect} from 'react-redux';
import {showUserList, getDialog, appendMessages} from '../actions';
import Dialogs from "../components/dialogs";

const mapStateToProps = (state) => {
  return {
    dialogs: state.dialogs,
    users: state.users,
    userId: state.userId,
    current: state.currentDialog,
    messages: state.messages
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getMessages: (id) => {
      dispatch(getDialog(id));
    },
    showUserList: (val) => {
      dispatch(showUserList(val))
    }
  }
}
const DialogsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dialogs);

export default DialogsContainer
