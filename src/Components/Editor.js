import React from "react";

const Editor = props => (
  <div className="editor">
    <input
      className="editor-subject"
      value={props.note.subject}
      onChange={event => props.onSubjectChange(props.note, event)}
    />
    {props.note.tasks.map((task, index) => {
      return (
        <p className="editor-task" key={index}>
          + {task}
        </p>
      );
    })}
  </div>
);

export default Editor;
