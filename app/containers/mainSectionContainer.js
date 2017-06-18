import {connect} from 'react-redux';
import {setupWebSocket} from '../actions';
import MainSection from "../components/mainSection";

const mapStateToProps = (state) => {
  return {
    showUserList: state.showUserList,
    userId: state.userId,
    // dialogs: state.dialogs,
    currentDialog: state.currentDialog
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    setupWebSocket: () => {
      dispatch(setupWebSocket());
    }
    // setUserId: (id) => {
    //   dispatch(setUserId(id));
    // },
    // setUserList: (userList) => {
    //   dispatch(setUserList(userList));
    // },
    // setDialogList: (list) => {
    //   dispatch(setDialogList(list));
    // },
    // setMessages: (list) => {
    //   dispatch(appendMessages(list));
    // }
  }
}
const mainSectionContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MainSection);

export default mainSectionContainer
