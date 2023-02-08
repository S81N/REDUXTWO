import React from "react";
import ReactDOM from "react-dom";
import "./stylesheets/index.css";
import App from "./components/App";
import Main from "./Main";
import { Provider } from "react-redux";
import Store from "./rComponent/Redux";

ReactDOM.render(
  <Provider store={Store}>
    <React.StrictMode>
      <Main />
      {/* <App /> */}
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
