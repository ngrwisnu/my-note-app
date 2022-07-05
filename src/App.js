import { Fragment, Component } from "react";
import Footer from "./components/footer/Footer";
import Form from "./components/form/Form";
import Navbar from "./components/navigation/Navbar";
import Notes from "./components/notes/Notes.jsx";
// Importing data from utils
import {
  getInitialData,
  showFormattedDate as formattedDate,
} from "./utils/index";

let initNotes = getInitialData();

class App extends Component {
  constructor() {
    super();

    this.state = {
      initData: initNotes,
    };

    this.formatDate = this.formatDate.bind(this);
    this.addNote = this.addNote.bind(this);
  }

  formatDate(date) {
    return formattedDate(date);
  }

  addNote({ title, body }) {
    this.setState((prevState) => {
      return {
        initData: [
          {
            title,
            body,
            createdAt: formattedDate(+new Date()),
            archived: false,
            id: +new Date(),
          },
          ...prevState.initData,
        ],
      };
    });
  }

  render() {
    return (
      <Fragment>
        <Navbar />
        <Form
          titleValHandler={this.titleValHandler}
          bodyValHandler={this.bodyValHandler}
          addNote={this.addNote}
        />
        <Notes initData={this.state.initData} formatDate={this.formatDate} />
        <Footer />
      </Fragment>
    );
  }
}

export default App;
