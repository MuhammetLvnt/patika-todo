import React, { useState } from "react";
import axios from "axios";

export const handleCompleted = (id, comp, text) => {
  axios
    .put(
      `https://us-central1-todo-app-4f938.cloudfunctions.net/app/api/v1/todo/${id}`,
      { title: text, completed: comp }
    )
    .then((res) => {
      alert(
        `"${text}" görevi ${
          comp ? "yapıldı olarak işaretlendi" : "yapılmadı olarak işaretlendi"
        }`
      );
    });
};

export const handleDeleteClick = (id) => {
  axios
    .delete(
      `https://us-central1-todo-app-4f938.cloudfunctions.net/app/api/v1/todo/${id}`
    )
    .then((res) => res.data);
};

function ToDoListItem({ todo }) {
  const [text] = useState(todo.title ? todo.title : "");

  return (
    <div>
      <li className={todo.completed ? "completed" : ""}>
        <div className="view">
          <input
            onClick={() => handleCompleted(todo._id, !todo.completed, text)}
            className="toggle"
            type="checkbox"
            checked={todo.completed}
          />
          <label>{todo.title}</label>
          <button
            onClick={() => handleDeleteClick(todo._id)}
            className="destroy"
          ></button>
        </div>
      </li>
    </div>
  );
}

export default ToDoListItem;
