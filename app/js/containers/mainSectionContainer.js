import {connect} from 'react-redux';
import {setLoginStateAction} from '../actions';
import MainSection from "../components/mainSection";

const mapStateToProps = (state) => {
  return {
    login: state.loginState
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    setState: (id) => {
      dispatch(setLoginStateAction(id))
    }
  }
}
const mainSectionContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MainSection);

export default mainSectionContainer
