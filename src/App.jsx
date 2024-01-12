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
];

export default function App() {
  return (
    <div className="app">
      <div className="left">
        <Peoples />
        <button>
          <span>Add New</span>
        </button>
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

      {ppl.balance < 0 && (
        <p className="red">
          You owe {ppl.name} € {Math.abs(ppl.balance)}
        </p>
      )}

      {ppl.balance > 0 && (
        <p className="green">
          {ppl.name} owes you € {Math.abs(ppl.balance)}
        </p>
      )}

      {ppl.balance === 0 && <p>You are even!</p>}
    </li>
  );
}

function AddNewPeople() {
  return (
    <form className="addnew">
      <div className="addnew-input-group">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" />
      </div>
      <div className="addnew-input-group">
        <label htmlFor="img">Image URL</label>
        <input type="text" id="img" />
      </div>
      <button>
        <span>Add New</span>
      </button>
    </form>
  );
}

function Split() {
  return (
    <form className="split">
      <div className="split-input-group">
        <label htmlFor="billvalue">Bill value</label>
        <input type="text" id="billvalue" />
      </div>

      <div className="split-input-group">
        <label htmlFor="expense">Your Expense</label>
        <input type="text" id="expense" />
      </div>

      <div className="split-input-group">
        <label htmlFor="checkexp">Chek's Expense</label>
        <input type="text" id="checkexp" />
      </div>

      <div className="split-input-group">
        <p>who's paying the bill?</p>
        <select>
          <option value="">You</option>
        </select>
      </div>

      <button>
        <span>Split Bill</span>
      </button>
    </form>
  );
}
