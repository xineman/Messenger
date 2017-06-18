import {connect} from 'react-redux';
import {setUserId, setState, setupWebSocket} from '../actions';
import SignIn from "../components/signIn";
import {ajax} from "../utils";

function signIn(dispatch) {
  let username = document.getElementById('username').value;
  let pass = document.getElementById('password').value;
  ajax("http://" + window.location.host + "/login", "POST", {
    username: username,
    password: pass
  }).then((success) => {
    let message = JSON.parse(success);
    if (!message.error) {
      dispatch(setState(message));
      dispatch(setupWebSocket());
      console.log("Yay! " + success);
    } else {
      dispatch(setUserId(-1));
      alert(message.error);
    }
  }).catch((reason) => {
    console.log(reason);
  });
}

const mapDispatchToProps = (dispatch) => {
  return {
    signInClick: () => {
      signIn(dispatch);
    }
  }
}
const SignInContainer = connect(null, mapDispatchToProps)(SignIn);

export default SignInContainer
