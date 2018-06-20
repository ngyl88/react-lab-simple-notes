import React, { Component } from "react";
import { notes } from "../src/seedData";
import Listing from "./Components/Listing";
import Viewer from "./Components/Viewer";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      userId: "user123@gmail.com",
      notes: notes,
      activeNoteIndex: undefined,
      editorActiveTaskIndex: undefined
    };
  }

  handleClickOnListing = (index) => {
    this.setState({
      activeNoteIndex: index,
      editorActiveTaskIndex: undefined
    });
  }

  //todo: edit @ Editor
  handleSubjectChange = (note, event) => {
    const index = this.state.notes.indexOf(note);
    const newNote = {
      ...note,
      subject: event.target.value
    }
    this.setState({
      notes: [
        ...this.state.notes.slice(0, index),
        newNote,
        ...this.state.notes.slice(index+1)
      ]
    });
  }

  //todo: create @ button

  render() {
    console.log(this.state);
    const activeIndex = this.state.activeNoteIndex;
    return (
      <div>
        <h1>Hello, React Simple Notes!</h1>
        <div id="main">
          <Listing notes={this.state.notes} onClick={this.handleClickOnListing} />
          <Viewer
            userId={this.state.userId}
            note={
              activeIndex === undefined
                ? undefined
                : this.state.notes[activeIndex]
            }
            editorInfo={this.state.editorInfo}
            onSubjectChange={this.handleSubjectChange}
          />
        </div>
      </div>
    );
  }
}

export default App;
