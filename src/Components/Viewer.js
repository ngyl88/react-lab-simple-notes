import React from "react";
import User from "./User";
import Editor from "./Editor";

const Viewer = props => {
  return (
    <div className="viewer">
      <User userId={props.userId} />
      {props.note === undefined ? (
        ""
      ) : (
        <Editor note={props.note} 
        editorInfo={props.editorInfo}
        onSubjectChange={props.onSubjectChange}
        onTaskChange={props.onTaskChange}
        createTask={props.createTask} />
      )}
    </div>
  );
};

export default Viewer;
