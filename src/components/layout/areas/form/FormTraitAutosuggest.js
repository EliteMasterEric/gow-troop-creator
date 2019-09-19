import React, { memo, useCallback } from "react";

import { makeStyles } from "@material-ui/core/styles";
import { TextField, MenuItem, Paper } from "@material-ui/core";

import Autosuggest from "react-autosuggest";
import deburr from "lodash/deburr";
import match from "autosuggest-highlight/match";
import parse from "autosuggest-highlight/parse";

import { Image } from "../../../Util";
import { traits } from "../../../Values";

const getSuggestions = value => {
  const inputValue = deburr(value.trim()).toLowerCase();
  const inputLength = inputValue.length;
  let count = 0;

  return inputLength === 0
    ? []
    : traits.filter(suggestion => {
      const keep =
        count < 5 &&
        suggestion.name.slice(0, inputLength).toLowerCase() === inputValue;

      if (keep) {
        count += 1;
      }

      return keep;
    });
};

const getSuggestionValue = suggestion => {
  return suggestion.name;
};

const renderInputComponent = inputProps => {
  const { classes, inputRef = () => { }, ref, ...other } = inputProps;

  return (
    <TextField
      fullWidth
      variant="filled"
      InputProps={{
        inputRef: node => {
          ref(node);
          inputRef(node);
        },
        classes: {
          input: classes.input
        }
      }}
      {...other}
    />
  );
};

const renderSuggestion = (suggestion, { query, isHighlighted }) => {
  const matches = match(suggestion.name, query);
  const parts = parse(suggestion.name, matches);

  return (
    <MenuItem selected={isHighlighted} component="div">
      <div>
        <Image
          source={`./assets/graphics/troopcard/traits/${suggestion.code}.png`}
        />
        {parts.map(part => (
          <span
            key={part.text}
            style={{ fontWeight: part.highlight ? 500 : 400 }}
          >
            {part.text}
          </span>
        ))}
      </div>
    </MenuItem>
  );
};

const useStyles = makeStyles(theme => ({
  root: {
    height: 250,
    flexGrow: 1
  },
  container: {
    position: "relative"
  },
  suggestionsContainerOpen: {
    position: "absolute",
    zIndex: 1,
    marginTop: theme.spacing(1),
    left: 0,
    right: 0
  },
  suggestion: {
    display: "block"
  },
  suggestionsList: {
    margin: 0,
    padding: 0,
    listStyleType: "none"
  },
  divider: {
    height: theme.spacing(2)
  },
  traitIcon: {
    width: "auto",
    height: theme.spacing(3),
    marginRight: theme.spacing(0.5)
  }
}));

export const FormTraitAutosuggest = memo(({ index, troop, setTroop }) => {
  const classes = useStyles();

  const [state, setState] = React.useState("");

  const [stateSuggestions, setSuggestions] = React.useState([]);

  const handleChange = useCallback((event, { newValue }) => { setState(newValue); }, []);

  const handleSuggestionSelected = (event, { suggestion }) => {
    // Upon selecting a trait, clear out the autocomplete field and fill in the trait fields.
    console.log(suggestion);
    console.log(`trait${index}code`);
    setState("");
    setTroop({
      ...troop,
      [`trait${index}code`]: suggestion.code,
      [`trait${index}name`]: suggestion.name,
      [`trait${index}desc`]: suggestion.description
    });
  };

  const handleSuggestionsFetchRequested = ({ value }) => {
    setSuggestions(getSuggestions(value));
  };

  const handleSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  const autosuggestProps = {
    renderInputComponent,
    suggestions: stateSuggestions,
    onSuggestionsFetchRequested: handleSuggestionsFetchRequested,
    onSuggestionsClearRequested: handleSuggestionsClearRequested,
    onSuggestionSelected: handleSuggestionSelected,
    getSuggestionValue,
    renderSuggestion
  };

  return (
    <Autosuggest
      {...autosuggestProps}
      inputProps={{
        classes,
        id: `react-autosuggest-trait${index}`,
        label: "Autofill Trait",
        placeholder: "Start typing...",
        value: state,
        onChange: handleChange
      }}
      theme={{
        container: classes.container,
        suggestionsContainerOpen: classes.suggestionsContainerOpen,
        suggestionsList: classes.suggestionsList,
        suggestion: classes.suggestion
      }}
      renderSuggestionsContainer={options => (
        <Paper {...options.containerProps} square>
          {options.children}
        </Paper>
      )}
    />
  );
});

export default FormTraitAutosuggest;
