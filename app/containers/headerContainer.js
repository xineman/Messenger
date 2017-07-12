import {connect} from 'react-redux';
import Header from "../components/header";

const mapStateToProps = (state) => {
  return {
    userId: state.userId,
    total: state.total
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
