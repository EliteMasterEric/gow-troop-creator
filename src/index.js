import React from "react";
import ReactDOM from "react-dom";

import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";

import { App } from "./components/App";
import { orange, blueGrey } from "@material-ui/core/colors";

// CSS
import './css/style.css'
import './css/google-fonts.css'
import './css/nerd-fonts.min.css'

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: blueGrey,
    secondary: orange,
  },
  zIndex: {
    appBar: 1
  }
});

function Index() {
  return (
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  );
}

ReactDOM.render(<Index />, document.getElementById('root'));