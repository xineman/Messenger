import HeaderContainer from "../containers/headerContainer";
import Footer from "./footer.js";
import MainSectionContainer from "../containers/mainSectionContainer.js";
import React from 'react';
export default class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="root-inner">
        <HeaderContainer />
        <MainSectionContainer />
        <Footer />
      </div>
    )
  }
}
