import React from 'react';
import MessagesContainer from "../containers/messagesContainer";
import MessageInput from "../containers/messageInput";
import MessagesPlaceholder from "../components/messagesPlaceholder";
export default class Messages extends React.Component {
  constructor() {
    super();
  }

  render() {
    return(
      <section className="messages">
        {!this.props.currentDialog && <MessagesPlaceholder />}
        {this.props.currentDialog && <MessagesContainer />}
        {this.props.currentDialog && <MessageInput />}
      </section>
    );
  }
}
