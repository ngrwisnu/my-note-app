import React, { Fragment, Component } from "react";
import Footer from "./components/footer/Footer";
import Form from "./components/form/Form";
import Navbar from "./components/navigation/Navbar";
import Notes from "./components/notes/Notes.jsx";
import TabsNav from "./components/tabs/TabsNav";
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
      tabStatus: "",
    };

    this.formatDate = this.formatDate.bind(this);
    this.addNote = this.addNote.bind(this);
    this.noteButtonHandler = this.noteButtonHandler.bind(this);
    this.archiveHandler = this.archiveHandler.bind(this);
    this.showNoteHandler = this.showNoteHandler.bind(this);
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
      this.archiveHandler(id);
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
    this.setState((prevState) => ({
      initData: prevState.initData.map((el) =>
        el.id === id ? { ...el, archived: true } : el
      ),
    }));
  }

  editHandler(id, name) {
    console.log(id, name);
  }

  showNoteHandler(name) {
    if (name === "recent") {
      console.log("button terbaru ditekan");
    }

    if (name === "archive") {
      console.log("button arsip ditekan");
    }
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
        <TabsNav showNoteHandler={this.showNoteHandler} />
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
