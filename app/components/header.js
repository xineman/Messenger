import React from 'react';
export default class Header extends React.Component {
  constructor() {
    super();
  }

  render() {
    return(
      <header className="header">
        <div className="container header__content">
          <p className="header__online">Online: <span className="header__online-count">2564651225</span> users.</p>
          {this.props.userId!=-1 && <p className="header__logout-link" onClick={() => this.props.logout()}>Logout</p>}
        </div>
      </header>
    );
  }
}
