import React from "react";

const Editor = props => (
  <div className="editor">
    <input
      className="editor-subject"
      placeholder="Type your note header here"
      value={props.note.subject}
      onChange={event => props.onSubjectChange(props.note, event)}
    />
    <div className="editor-tasks">
      {props.note.tasks.map((task, index) => (
        <div className="editor-task" key={index}>
          +{" "}
          <textarea
            value={task}
            placeholder="Enter new task here"
            onChange={event => props.onTaskChange(index, event)}
          />
        </div>
      ))}
      <button onClick={props.createTask}>+</button>
    </div>
  </div>
);

export default Editor;
