import React from "react";
import { useUrl } from "../context/UrlContext";
import axios from "axios";

function ContentFooter() {
  const { todos, setTodos, filter, setFilter, url } = useUrl();

  const allDelete = () => {
    axios.get(url).then((res) => {
      const filteredTodos = todos?.filter((todo) => !todo.completed);
      setTodos(filteredTodos);
    });
  };

  return (
    <div>
      <footer className="footer">
        <span className="todo-count">
          <strong>{todos?.length} </strong>
          {todos?.length < 2 ? "item" : "items"} left
        </span>

        <ul className="filters">
          <li>
            <a
              href="#/"
              onClick={() => setFilter("all")}
              className={filter === "all" ? "selected" : ""}
            >
              All
            </a>
          </li>
          <li>
            <a
              href="#/"
              onClick={() => setFilter("active")}
              className={filter === "active" ? "selected" : ""}
            >
              Active
            </a>
          </li>
          <li>
            <a
              href="#/"
              onClick={() => setFilter("completed")}
              className={filter === "completed" ? "selected" : ""}
            >
              Completed
            </a>
          </li>
        </ul>

        <button onClick={allDelete} className="clear-completed">
          Clear completed
        </button>
      </footer>
    </div>
  );
}

export default ContentFooter;
