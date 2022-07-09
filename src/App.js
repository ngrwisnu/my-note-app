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
      tabStatus: "recent",
      filteredNotes: [],
      searchValue: "",
    };

    this.formatDate = this.formatDate.bind(this);
    this.addNote = this.addNote.bind(this);
    this.noteButtonHandler = this.noteButtonHandler.bind(this);
    this.archiveHandler = this.archiveHandler.bind(this);
    this.showNoteHandler = this.showNoteHandler.bind(this);
    this.undoHandler = this.undoHandler.bind(this);
    this.searchHandler = this.searchHandler.bind(this);
    this.searchSubmitHandler = this.searchSubmitHandler.bind(this);
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

    if (name === "undo") {
      this.undoHandler(id);
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

  editHandler(id) {
    alert("Button functionality under construction!");
  }

  undoHandler(id) {
    this.setState((prevState) => ({
      initData: prevState.initData.map((el) =>
        el.id === id ? { ...el, archived: false } : el
      ),
    }));
  }

  showNoteHandler(name) {
    if (name === "recent") {
      this.setState(() => {
        return {
          tabStatus: name,
        };
      });
    }

    if (name === "archive") {
      this.setState(() => {
        return {
          tabStatus: name,
        };
      });
    }
  }

  searchHandler(val) {
    this.setState((prevState) => {
      return {
        ...prevState,
        searchValue: val,
      };
    });
  }

  searchSubmitHandler(e) {
    e.preventDefault();
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
        <TabsNav
          showNoteHandler={this.showNoteHandler}
          tabStatus={this.state.tabStatus}
          searchValue={this.state.searchValue}
          searchHandler={this.searchHandler}
          searchSubmitHandler={this.searchSubmitHandler}
        />
        <Notes
          initData={this.state.initData}
          formatDate={this.formatDate}
          noteButtonHandler={this.noteButtonHandler}
          tabStatus={this.state.tabStatus}
          searchValue={this.state.searchValue}
        />
        <Footer />
      </Fragment>
    );
  }
}

export default App;
