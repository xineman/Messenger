import React from 'react';
import Messages from "./messages";
import SignInContainer from "../containers/signInContainer";
import LeftPanel from "../components/leftPanel";
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
    console.log("Updated");
  }

  render() {
    return (
      <main className="main container">
        {this.props.userId!=-1
          && <LeftPanel showUsers={this.props.showUserList} />}
        {this.props.userId!=-1
          && <Messages currentDialog={this.props.currentDialog}/>}
        {this.props.userId==-1
          && <SignInContainer />}
      </main>
    );
  }
}
