import React from 'react';
export default class Users extends React.Component {
  constructor() {
    super();
  }

  componentWillMount() {
  }
  renderUserList() {
    let users = [];
    for (let user of this.props.users) {
      users.push(
        <li key={user.id} className={"left-panel__user "+ (user.online&&"left-panel__user_online")} onClick={() => this.props.startDialog(user.id)}>
          <p className="left-panel__users-name">{user.name}</p>
          <p className="left-panel__users-username">{user.username}</p>
        </li>
      )
    }
    return users;
  }

  render() {
    return(
      <ul className="left-panel__userlist">
        {this.renderUserList()}
      </ul>
    );
  }
}
