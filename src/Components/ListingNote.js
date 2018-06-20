import React from "react";

const ListingNote = props => (
  <div className="preview" onClick={() => props.onClick(props.index)}>
    <h4>{props.note.subject}</h4>
    <p>+ {props.note.tasks[0]}</p>
  </div>
);

export default ListingNote;
