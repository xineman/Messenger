import React from 'react';
import Messages from "./messages";
import SignInContainer from "../containers/signInContainer";
import DialogsContainer from "../containers/dialogsContainer";
import UsersContainer from "../containers/usersContainer";
export default class MainSection extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    console.log("Will");
  }
  componentDidMount() {
    this.props.setupWebSocket();
    console.log("Did");
  }
  componentDidUpdate() {
    // this.props.setupWebSocket();
    console.log("Updated");
  }

  render() {
    return (
      <main className="main container">
        {this.props.userId!=-1 && <DialogsContainer dialogs={this.props.dialogs}/>}
        {this.props.userId!=-1 && <Messages />}
        {this.props.userId==-1 && <SignInContainer />}
        {this.props.showUserList && <UsersContainer />}
      </main>
    );
  }
}
