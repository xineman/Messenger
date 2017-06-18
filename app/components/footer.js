import React from 'react';
export default class Footer extends React.Component {
  constructor() {
    super();
  }

  render() {
    return(
      <footer className="footer">
        <div className="footer__content container">
            {/* <a className="footer__link" href="http://github.com/xineman/">GitHub</a> */}
          <div className="">
            Copyright (c) 2017 Yurii Hupalo All Rights Reserved.
          </div>
        </div>
      </footer>
    );
  }
}
