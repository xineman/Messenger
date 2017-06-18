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
        <li key={user.id} className={"users__item "+ (user.online&&"users__item_online")} onClick={() => this.props.startDialog(user.id)}>
          <p className="users__name">{user.name}</p>
          <p className="users__username">{user.username}</p>
        </li>
      )
    }
    return users;
  }

  render() {
    return(
      <div className="popup users" onClick={(e) => this.props.showUserList(e)}>
        <div className="users__wrapper container">
          <div className="users__header" >
            <p>Users online:</p><p className="users__close" onClick={(e) => this.props.showUserList(e)}>X</p>
          </div>
          <ul className="users__userlist">

            {this.renderUserList()}

          </ul>

        </div>

      </div>
    );
  }
}
