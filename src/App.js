import { Fragment, Component } from "react";
import Footer from "./components/footer/Footer";
import Form from "./components/form/Form";
import Navbar from "./components/navigation/Navbar";
import Notes from "./components/notes/Notes.jsx";
// Importing data from utils
import { getInitialData } from "./utils/index";

class App extends Component {
  constructor() {
    super();

    this.state = {
      initData: getInitialData(),
    };
  }

  render() {
    return (
      <Fragment>
        <Navbar />
        <Form />
        <Notes />
        <Footer />
      </Fragment>
    );
  }
}

export default App;
