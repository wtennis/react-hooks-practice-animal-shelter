import React from "react";

function Filters({onChangeType, onFindPetsClick}) {
  return (
    <div className="ui form">
      <h3>Animal type</h3>
      <div className="field">
        <select onChange = {onChangeType} name="type" id="type" aria-label="type">
          <option onChange = {onChangeType} value="all">All</option>
          <option onChange = {onChangeType} value="cat">Cats</option>
          <option onChange = {onChangeType} value="dog">Dogs</option>
          <option onChange = {onChangeType} value="micropig">Micropigs</option>
        </select>
      </div>

      <div className="field">
        <button onClick = {onFindPetsClick} className="ui secondary button">Find pets</button>
      </div>
    </div>
  );
}

export default Filters;
