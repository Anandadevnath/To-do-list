import React from "react";
import "../ToDoList/Todocss.css";
import "./TodoJS";

const Todohtml = () => {
  const addTask = () => {
    console.log("Task added");
  };

  return (
    <div className="container">
      <div className="todo-app">
        <h2>
           To-Do List <img src="./src/assets/icon.png" alt="icon" />
        </h2>
        <div className="row">
          <input type="text" id="input-box" placeholder="Add Your Text" />
          <button onClick={addTask}>Add</button>
        </div>
        <ul id="list-container">
        </ul>
      </div>
    </div>
  );
};

export default Todohtml;
