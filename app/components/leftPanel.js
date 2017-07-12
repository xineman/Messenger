import React from 'react';
import UsersDialogsTabsContainer from "../containers/usersDialogsTabsContainer";
import DialogsContainer from "../containers/dialogsContainer";
import UsersContainer from "../containers/usersContainer";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
export default class LeftPanel extends React.Component {
  constructor() {
    super();
  }

  render() {
    return(
      <aside className="left-panel">
        <UsersDialogsTabsContainer />
        <ReactCSSTransitionGroup
          // transitionAppear={true}
          // transitionAppearTimeout={500}
          transitionName="dialogs-anim"
          transitionEnterTimeout={250}
          transitionLeaveTimeout={250}>
          {!this.props.showUsers && <DialogsContainer key="1" />}
        </ReactCSSTransitionGroup>
        <ReactCSSTransitionGroup
          transitionName="users-anim"
          transitionEnterTimeout={250}
          transitionLeaveTimeout={250}>
          {this.props.showUsers && <UsersContainer key="2" />}
        </ReactCSSTransitionGroup>

      </aside>
    );
  }
}
