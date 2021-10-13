import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import ShowState from "./components/ShowState";
import FormContextProvider from "./contexts/formContext";
import Routes from "./routes";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./styles/global.css";
import ErrorsContextProvider from "./contexts/errorsContext";

ReactDOM.render(
  <React.StrictMode>
    <FormContextProvider>
      <ErrorsContextProvider>
        <ToastContainer position={"top-center"} autoClose={8000} />
        <ShowState />
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </ErrorsContextProvider>
    </FormContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
