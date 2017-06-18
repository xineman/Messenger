import {connect} from 'react-redux';
import {showUserList, getDialog, appendMessages} from '../actions';
import Dialogs from "../components/dialogs";

const mapStateToProps = (state) => {
  return {
    dialogs: state.dialogs,
    users: state.users,
    userId: state.userId
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    showUserList: (val) => {
      dispatch(showUserList(val))
    },
    getMessages: (id) => {
      dispatch(getDialog(id));
    }
  }
}
const DialogsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dialogs);

export default DialogsContainer
