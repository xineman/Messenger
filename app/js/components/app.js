import Header from "./header.js";
import Footer from "./footer.js";
import MainSection from "../containers/mainSectionContainer.js";
export default class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="root-inner">
        <Header />
        <MainSection />
        <Footer />
      </div>
    )
  }
}
