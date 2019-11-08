import React from "react";
import ReactDOM from "react-dom";

import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";

import { orange, blueGrey } from "@material-ui/core/colors";
import { CssBaseline } from "@material-ui/core";
import App from "./components/App";

// CSS
// Preload to force the browser to request it in the background.
import(
  /* webpackPreload: true */
  "./css/style.css"
);
import(
  /* webpackPreload: true */
  "./css/google-fonts.css"
);
import(
  /* webpackPreload: true */
  "./css/nerd-fonts.min.css"
);

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: blueGrey,
    secondary: orange
  },
  zIndex: {
    appBar: 1
  }
});

function Index() {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline>
        <App />
      </CssBaseline>
    </MuiThemeProvider>
  );
}

ReactDOM.render(<Index />, document.getElementById("root"));
