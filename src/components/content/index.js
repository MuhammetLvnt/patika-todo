import React from "react";
import ToDoList from "./ToDoList";

function Content() {
  return (
    <div>
      <section className="main">
        <input className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all">Mark all as complete</label>

        <ToDoList />
      </section>
    </div>
  );
}

export default Content;
