import { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";

const UrlContext = createContext();

export const UrlContextProvider = ({ children }) => {
  const [todos, setTodos] = useState();

  const url =
    "https://us-central1-todo-app-4f938.cloudfunctions.net/app/api/v1/todo";

  useEffect(() => {
    axios(url)
      .then((res) => setTodos(res.data))
      .catch((err) => console.error(err));
  }, [todos]);

  const values = {
    todos,
    setTodos,
    url,
  };
  return <UrlContext.Provider value={values}>{children}</UrlContext.Provider>;
};
export const useUrl = () => {
  const context = useContext(UrlContext);

  if (context === undefined) {
    throw new Error("useUrl must be used withing a UrlProvider");
  }
  return context;
};
