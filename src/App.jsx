import React, { useState } from "react";
import ButtonUI from "./ButtonUI";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  return (
    <div className="app">
      <div className="left">
        <Peoples />
        <AddNewPeople />
      </div>

      <Split />
      <ButtonUI />
    </div>
  );
}

function Peoples() {
  return (
    <div className="people">
      <PeopleList />
    </div>
  );
}

function PeopleList() {
  const ppls = initialFriends;
  return (
    <ul className="peoplelist">
      {ppls.map((ppl) => (
        <People ppl={ppl} key={ppl.id} />
      ))}
    </ul>
  );
}

function People({ ppl }) {
  return (
    <li>
      <img src={ppl.image} alt={ppl.name} />
      <h3>{ppl.name}</h3>
      <button>
        <span>Select</span>
      </button>
      <p>you owe sarah €{ppl.balance}</p>
    </li>
  );
}

function AddNewPeople() {
  return (
    <div className="addnew">
      <div className="input-group">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" />
      </div>
      <div className="input-group">
        <label htmlFor="img">Image URL</label>
        <input type="text" id="img" />
      </div>
      <button>
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
