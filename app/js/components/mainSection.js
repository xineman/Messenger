import Messages from "./messages";
import Users from "./users";
import SignInContainer from "../containers/signInContainer";
export default class MainSection extends React.Component {
  constructor() {
    super();
  }
  componentWillMount() {
    new Promise((resolve, reject) => {
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          resolve(this.responseText);
        } else if (this.readyState == 4) {
          reject(this.responseText);
        }
      };
      xhttp.open("GET", "http://localhost:3001/checkout", true);
      xhttp.send();
    }).then((successMessage) => {
      //TODO Dispatch action here

      // var webSocket = new WebSocket("ws://localhost:3001/chat/");
      // webSocket.onmessage = function (msg) { console.log(msg.data) };
      // webSocket.onclose = function () { alert("WebSocket connection closed") };
      console.log("UserId: " + successMessage);
      if (successMessage==-1)
        this.props.setState(1);
      else
        this.props.setState(2);
    }).catch((reason) => {
      console.log("Couldn't check login state for a reason: " + reason);
    });
  }


  render() {
    return (
      <main className="main container">
        {this.props.login!=0 && <Users />}
        {this.props.login!=0 && <Messages />}
        {this.props.login==1 && <SignInContainer />}
      </main>
    );
  }
}
