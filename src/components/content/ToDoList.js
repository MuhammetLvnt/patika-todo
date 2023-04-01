import React from "react";
import { useUrl } from "../../context/UrlContext";
import ToDoListItem from "./ToDoListItem";

let result = null;

function ToDoList() {
  const { todos, filter } = useUrl();
  result = todos;

  if (filter !== "all") {
    result = todos?.filter((todo) =>
      filter === "active" ? todo.completed === false : todo.completed === true
    );
  }
  return (
    <div>
      <ul className="todo-list">
        {result?.map((todo) => (
          <ToDoListItem todo={todo} key={todo._id} />
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
