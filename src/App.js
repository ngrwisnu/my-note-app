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
    this.noteButtonHandler = this.noteButtonHandler.bind(this);
    this.archiveHandler = this.archiveHandler.bind(this);
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

  noteButtonHandler(id, name) {
    if (name === "delete") {
      this.deleteHandler(id);
    }

    if (name === "edit") {
      this.editHandler(id, name);
    }

    if (name === "archive") {
      const newData = this.archiveHandler(id);

      console.log(newData);
    }
  }

  deleteHandler(id) {
    const newNotes = this.state.initData.filter((data) => data.id !== id);

    this.setState(() => {
      return {
        initData: newNotes,
      };
    });
  }

  archiveHandler(id) {
    this.state.initData.map((data) => {
      if (data.id === id) {
        return data;
      }
    });
    return null;
  }

  editHandler(id, name) {
    console.log(id, name);
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
        <Notes
          initData={this.state.initData}
          formatDate={this.formatDate}
          noteButtonHandler={this.noteButtonHandler}
        />
        <Footer />
      </Fragment>
    );
  }
}

export default App;
