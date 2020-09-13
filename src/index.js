import React from "react";
import ReactDOM from "react-dom";
import App from "./iNspiredApp";
import * as serviceWorker from "./serviceWorker";

import { ThemeProvider } from "styled-components";
import Themes from "./themes/Theme";
import { GlobalStyles } from "./themes/GlobalStyles";
ReactDOM.render(
  <ThemeProvider theme={Themes}>
    <GlobalStyles />
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
