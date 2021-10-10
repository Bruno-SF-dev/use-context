import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import ShowState from "./components/ShowState";
import FormContextProvider from "./contexts/formContext";
import Routes from "./routes";

import "./styles/global.css";

ReactDOM.render(
  <React.StrictMode>
    <FormContextProvider>
      <ShowState />
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </FormContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
