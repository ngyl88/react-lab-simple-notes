import React from "react";
import ListingNote from "./ListingNote";

const Listing = props => {
  return (
    <div className="nav">
      <button className="right">+</button>
      {props.notes.map((note, index) => (
        <ListingNote
          key={index}
          index={index}
          note={note}
          onClick={props.onClick}
        />
      ))}
    </div>
  );
};

export default Listing;
