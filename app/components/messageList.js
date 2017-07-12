import React from 'react';
import dateFormat from 'dateformat';
export default class MessageList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate() {
    var objDiv = document.getElementsByClassName("messages__list")[0];
    objDiv.scrollTop = objDiv.scrollHeight;
  }

  renderMessages() {
    let list = [];
    for (let message of this.props.messages) {
      if (this.props.dialog==message.dialogId)
      list.push(
        <li key={message.id} className={"messages__item-wrapper "+(this.props.userId==message.sender ? "messages__item-wrapper_my":" ")}>
          <div className={"messages__item "+(this.props.userId==message.sender &&"messages__item_my")}>{message.text}
            <span className="messages__item-time">{dateFormat(message.time,"H:MM")}</span>
          </div>
        </li>
      );
    }
    return list;
  }

  render() {
    return(
      <div className="messages__list-wrapper">
        <ul className="messages__list">
          {this.props.messages && this.renderMessages()}
        </ul>
      </div>
    );
  }
}
