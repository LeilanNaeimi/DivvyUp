import React, { useState } from "react";
import ButtonUI from "./ButtonUI";

export default function App() {
  return (
    <div className="app">
      <div className="left">
        <People />
        <AddNewPeople />
      </div>

      <Split />
      <ButtonUI />
    </div>
  );
}

function People() {
  return (
    <div className="people">
      <PeopleList />
    </div>
  );
}

function PeopleList({ name }) {
  return <div className="peoplelist">{name}</div>;
}

function AddNewPeople() {
  const [name, setName] = useState("");

  return (
    <div className="addnew">
      <div className="input-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label htmlFor="img">Image URL</label>
        <input type="text" id="img" />
      </div>
      <button onClick={setName}>
        <span>Add New</span>
      </button>
    </div>
  );
}

function Split() {
  return (
    <div className="split">
      <button>
        <span>Split Bill</span>
      </button>
    </div>
  );
}
