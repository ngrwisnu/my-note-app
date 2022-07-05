import React, { Component } from "react";
import Container from "../layout/Container";
import ContentWrapper from "../layout/ContentWrapper";
// Importing icons
import { FaPlus } from "react-icons/fa";

const lettersLimit = 50;

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
    };

    this.submitHandler = this.submitHandler.bind(this);
    this.titleHandler = this.titleHandler.bind(this);
    this.bodyHandler = this.bodyHandler.bind(this);
  }

  submitHandler(e) {
    e.preventDefault();

    if (this.state.title.length > 0) {
      this.props.addNote(this.state);

      this.setState(() => {
        return {
          title: "",
          body: "",
        };
      });
    }
  }

  titleHandler(e) {
    this.setState((prevState) => {
      return {
        ...prevState,
        title: e.target.value,
      };
    });
  }

  bodyHandler(e) {
    this.setState((prevState) => {
      return {
        ...prevState,
        body: e.target.value,
      };
    });
  }

  // countHandler() {
  //   this.setState((prevState) => {
  //     return {
  //       letters: prevState.letters + 1,
  //     };
  //   });
  // }

  render() {
    return (
      <section>
        <Container>
          <ContentWrapper className="flex justify-center py-12">
            <form
              className="flex h-[359px] w-[384px] flex-col gap-6 rounded-xl p-3 shadow-lg"
              onSubmit={this.submitHandler}
            >
              <div
                id="title"
                className="flex flex-col gap-1 border-b-2 border-neutral-200 py-1"
              >
                <input
                  type="text"
                  placeholder="Catatan hari ini ..."
                  className={`py-2 px-4 ${
                    this.state.title.length > lettersLimit
                      ? "bg-red-100 focus:outline-1 focus:outline-red-700"
                      : "focus:outline-none"
                  }`}
                  value={this.state.title}
                  onChange={this.titleHandler}
                />
                <small
                  className={`text-end ${
                    this.state.title.length > lettersLimit ? "text-red-700" : ""
                  }`}
                  onChange={this.countHandler}
                >
                  {this.state.title.length} / {lettersLimit}
                </small>
              </div>

              <div id="note">
                <textarea
                  name="desc"
                  id="desc"
                  rows="5"
                  placeholder="Deskripsi catatan"
                  className="w-full resize-none py-2 px-4 focus:outline-none"
                  value={this.state.body}
                  onChange={this.bodyHandler}
                ></textarea>
              </div>

              <button
                type="submit"
                className="flex items-center justify-center gap-2 rounded-md bg-gradient-to-r from-[#fe8c00] to-[#f83600] py-2 px-4 font-medium text-neutral-50 shadow-btn active:translate-y-[6px] active:shadow-none active:ring active:ring-orange-300 active:ring-offset-2"
              >
                <FaPlus />
                Tambahkan
              </button>
            </form>
          </ContentWrapper>
        </Container>
      </section>
    );
  }
}

export default Form;
