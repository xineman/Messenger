import {connect} from 'react-redux';
import UsersDialogsTabs from "../components/usersDialogsTabs";
import { showUserList } from "../actions"

const mapStateToProps = (state) => {
  return {
    userList: state.showUserList
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    showUserList: (val) => {
      dispatch(showUserList(val))
    }
  }
}
const UsersDialogsTabsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersDialogsTabs);

export default UsersDialogsTabsContainer
