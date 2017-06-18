import {connect} from 'react-redux';
import { showUserList, setState, setCurrentDialog } from '../actions';
import Users from "../components/users";
import { ajax } from "../utils";

const mapStateToProps = (state) => {
  return {
    users: state.users
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    showUserList: (e) => {
      if (e.target.classList.contains("popup")||e.target.classList.contains("users__close"))
        dispatch(showUserList(false));
    },
    startDialog: (id) => {
      dispatch(showUserList(false));
      ajax("http://" + window.location.host + "/dialog", "POST", {
        id: id
      }).then((success) => {
        let response = JSON.parse(success);
        console.log(response);
        if (!response.error) {
          dispatch(setState(response.data));
          dispatch(setCurrentDialog(response.requested));
        }
      });
    }
  }
}
const UsersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Users);

export default UsersContainer
