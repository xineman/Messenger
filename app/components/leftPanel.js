import React from 'react';
import UsersDialogsTabsContainer from "../containers/usersDialogsTabsContainer";
import DialogsContainer from "../containers/dialogsContainer";
import UsersContainer from "../containers/usersContainer";
export default class LeftPanel extends React.Component {
  constructor() {
    super();
  }

  render() {
    return(
      <aside className="left-panel">
        <UsersDialogsTabsContainer />
        {!this.props.showUsers
          ? <DialogsContainer />
          : <UsersContainer />}
      </aside>
    );
  }
}
