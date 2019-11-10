import React from "react";
import ReactDOM from "react-dom";

import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";

import { orange, blueGrey } from "@material-ui/core/colors";
import { CssBaseline } from "@material-ui/core";
import App from "./components/App";
import { unregisterServiceWorker } from "./serviceWorker";

// CSS
// Preload to force the browser to request it in the background.
import(
  /* webpackPreload: true */
  /* webpackChunkName: "style" */
  "./css/style.css"
);
import(
  /* webpackPreload: true */
  /* webpackChunkName: "style" */
  "./css/google-fonts.css"
);
import(
  /* webpackPreload: true */
  /* webpackChunkName: "style" */
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

const Index = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline>
        <App />
      </CssBaseline>
    </MuiThemeProvider>
  );
};

// Register service worker.
// registerServiceWorker();

// Unregister service worker.
unregisterServiceWorker();

ReactDOM.render(<Index />, document.getElementById("root"));
