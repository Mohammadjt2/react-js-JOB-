import React from "react";
import "./App.css";
import { useRoutes } from "react-router-dom";
import routes from "./Routes";

const App = () => {
  const router = useRoutes(routes);
  return <div>{router}</div>;
};

export default App;
