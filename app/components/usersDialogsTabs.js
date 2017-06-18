import React from 'react';
export default class UsersDialogsTabs extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <ul className="left-panel__tabs">
        <li className={"left-panel__tab " + (!this.props.userList && "left-panel__tab_active")} onClick={() => this.props.showUserList(false)}>
          <p className="left-panel__tab-text">Dialogs</p>
        </li>
        <li className={"left-panel__tab " + (this.props.userList && "left-panel__tab_active")} onClick={() => this.props.showUserList(true)}>
          <p className="left-panel__tab-text">Users</p>
        </li>
      </ul>
    );
  }
}
