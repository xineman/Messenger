import React from 'react';
export default class Dialogs extends React.Component {
  constructor(props) {
    super(props);
  }

  renderDialogs() {
    let dialogs = [];
    for (let dialog of this.props.dialogs) {
      let to = dialog.users[0]==this.props.userId?dialog.users[1]:dialog.users[0];

      dialogs.push(
        <div key={dialog.id} className="dialogs__item" onClick={() => this.props.getMessages(dialog.id)}>
          <li className="dialogs__item-header">
            <h3 className="dialogs__dialogname">{this.props.users.find((user)=>user.id==to).name}</h3>
            <p className="dialogs__time">19:30</p>
          </li>
          <p className="dialogs__message-preview">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      );
    }
    return dialogs;
  }

  render() {
    return(
      <ul className="dialogs">
        <li className="dialogs__item dialogs__item_add" onClick={() => this.props.showUserList(true)}>
          <p className="dialogs__new-message">New message +</p>
        </li>
        {this.props.dialogs && this.renderDialogs()}
      </ul>
    );
  }
}
