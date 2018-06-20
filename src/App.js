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
      activeNoteIndex: undefined
    };
  }

  handleClickOnListing = index => {
    this.setState({
      activeNoteIndex: index
    });
  };

  // edit @ Editor
  handleSubjectChange = (note, event) => {
    const index = this.state.notes.indexOf(note);
    const newNote = {
      ...note,
      subject: event.target.value
    };
    this.setState({
      notes: [
        ...this.state.notes.slice(0, index),
        newNote,
        ...this.state.notes.slice(index + 1)
      ]
    });
  };

  handleTaskChange = (taskIndex, event) => {
    const noteIndex = this.state.activeNoteIndex;
    const selectedNote = this.state.notes[noteIndex];

    const newTask = event.target.value;

    // remove if user erase all text
    const taskList = [...selectedNote.tasks.slice(0, taskIndex)];
    if (newTask !== "") taskList.push(newTask);
    taskList.push(...selectedNote.tasks.slice(taskIndex + 1));

    const newNote = {
      ...selectedNote,
      tasks: taskList
    };
    this.setState({
      notes: [
        ...this.state.notes.slice(0, noteIndex),
        newNote,
        ...this.state.notes.slice(noteIndex + 1)
      ]
    });
  };

  createTask = () => {
    const noteIndex = this.state.activeNoteIndex;
    const selectedNote = this.state.notes[noteIndex];
    const newNote = {
      ...selectedNote,
      tasks: [...selectedNote.tasks, ""]
    };

    this.setState({
      notes: [
        ...this.state.notes.slice(0, noteIndex),
        newNote,
        ...this.state.notes.slice(noteIndex + 1)
      ]
    });
  };

  //todo: create @ listing

  render() {
    const activeNoteIndex = this.state.activeNoteIndex;
    return (
      <div>
        <h1>Hello, React Simple Notes!</h1>
        <div id="main">
          <Listing
            notes={this.state.notes}
            onClick={this.handleClickOnListing}
          />
          <Viewer
            userId={this.state.userId}
            note={
              activeNoteIndex === undefined
                ? undefined
                : this.state.notes[activeNoteIndex]
            }
            editorInfo={this.state.editorInfo}
            onSubjectChange={this.handleSubjectChange}
            onTaskChange={this.handleTaskChange}
            createTask={this.createTask}
          />
        </div>
      </div>
    );
  }
}

export default App;
