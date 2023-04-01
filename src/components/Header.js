import React, { useState } from "react";
import { useUrl } from "../context/UrlContext";
import axios from "axios";

function Header() {
  const { url } = useUrl();
  const [text, setText] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (text.length > 3) {
      await axios.post(url, { title: text }).then((res) => {
        setText("");
        alert("başarı ile eklendi");
      });
    } else {
      alert("lütfen 3 karakterden fazla giriniz.");
    }
  };
  return (
    <div>
      <header className="header">
        <h1>todos</h1>
        <form onSubmit={handleSubmit}>
          <input
            value={text}
            type="text"
            className="new-todo"
            placeholder="What needs to be done?"
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
        </form>
      </header>
    </div>
  );
}

export default Header;
