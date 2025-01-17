// import React from "react";
// import "../ToDoList/Todocss.css";
// import "../ToDoList/TodoJS.js";

// const Todohtml = () => {
//   const addTask = () => {
//     console.log("Task added");
//   };

//   return (
//     <div className="container">
//       <div className="todo-app">
//         <h2>
//           To-Do List <img src="./src/assets/icon.png" alt="icon" />
//         </h2>
//         <div className="row">
//           <input type="text" id="input-box" placeholder="Add Your Text" />
//           <button onClick={addTask}>Add</button>
//         </div>
//         <ul id="list-container">
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Todohtml;


import React, { useState } from "react";
import "../ToDoList/Todocss.css";

const Todohtml = () => {
  const getSavedTasks = () => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  };

  const [tasks, setTasks] = useState(getSavedTasks());

  const saveTasksToLocalStorage = (updatedTasks) => {
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const addTask = () => {
    const inputBox = document.getElementById("input-box");
    const newTask = inputBox.value.trim();
    if (newTask === "") {
      alert("Please enter a task");
    } else {
      const updatedTasks = [...tasks, { text: newTask, checked: false }];
      setTasks(updatedTasks);
      saveTasksToLocalStorage(updatedTasks);
      inputBox.value = "";
    }
  };

  const toggleTask = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, checked: !task.checked } : task
    );
    setTasks(updatedTasks);
    saveTasksToLocalStorage(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
    saveTasksToLocalStorage(updatedTasks);
  };

  return (
    <div className="container">
      <div className="todo-app">
        <h2>
          To-Do List <img src="./src/assets/icon.png" alt="icon" />
        </h2>
        <div className="row">
          <input type="text" id="input-box" placeholder="Add Your Task" />
          <button onClick={addTask}>
            <img src="./src/assets/checked.png" alt="Add Icon" />
          </button>
        </div>
        <ul id="list-container">
          {tasks.map((task, index) => (
            <li
              key={index}
              className={task.checked ? "checked" : ""}
              onClick={() => toggleTask(index)}
            >
              {task.text}
              <span
                onClick={(e) => {
                  e.stopPropagation();
                  deleteTask(index);
                }}
              >
                <img src="./src/assets/delete.png" alt="Delete Icon" />
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Todohtml;