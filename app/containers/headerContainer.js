import {connect} from 'react-redux';
import {setLoginStateAction} from '../actions';
import Header from "../components/header";

const mapStateToProps = (state) => {
  return {
    userId: state.userId
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => {
      location.replace("/logout");
    }
  }
}
const headerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);

export default headerContainer
