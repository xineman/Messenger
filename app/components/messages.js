import React from 'react';
import MessagesContainer from "../containers/messagesContainer";
import MessageInput from "../containers/messageInput";
export default class Messages extends React.Component {
  constructor() {
    super();
  }

  render() {
    return(
      <section className="messages">
        <MessagesContainer />
        <MessageInput />
      </section>
    );
  }
}
