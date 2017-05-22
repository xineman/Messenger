export default class Header extends React.Component {
  constructor() {
    super();
  }

  render() {
    return(
      <header className="header">
        <div className="container header__content">
          <p className="header__online">Online: <span className="header__online-count">2564651225</span> users.</p>
          <a className="header__logout-link" href="#">Logout</a>
        </div>
      </header>
    );
  }
}
