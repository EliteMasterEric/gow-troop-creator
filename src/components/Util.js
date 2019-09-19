import React, { useState, useEffect, memo } from "react";

import { TextField } from "@material-ui/core";

// Displays a NerdFonts font icon.
export const Icon = memo(({ icon, className }) => {
  return (
    <div>
      <i className={`nf ${icon || "nf-fa-amazon"} ${className || null}`} />
    </div>
  );
});

// Displays an image file from its source.
export const Image = memo(({ source, className }) => {
  return <img alt="" src={source} className={className || null} />;
});

// The code to validate the length of a text field when you type in it is standard.
export const validateFieldLength = maxLength => event => {
  if (event.target.value.length > maxLength) {
    event.target.value = event.target.value.slice(0, event.target.maxLength);
  }
};

// Returns the "debounced" result of value.
// If the value has been edited in the past 500 milliseconds, it won't be updated.
// https://dev.to/gabe_ragland/debouncing-with-react-hooks-jci
export const useDebounce = (value, delay) => {
  // State and setters for debounced value
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(
    () => {
      // Set debouncedValue to value (passed in) after the specified delay
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);

      return () => {
        clearTimeout(handler);
      };
    },
    // Only re-call effect if value changes
    // You could also add the "delay" var to inputs array if you ...
    // ... need to be able to change that dynamically.
    [value, delay]
  );

  return debouncedValue;
}

// The standard form field. Memoized for performance.
// The className,
export const FormText = memo(({ id, fieldName, value, onChange,
  label, type, className, onInput, multiline, InputProps }) => (
    <TextField
      // Required inputs.
      // Pass in an ID for React to identify the field.
      id={id}
      // Pass in the state to display in the field.
      value={value}
      // Pass in a callback.
      onChange={e => onChange(fieldName, e.target.value)}
      // Constants
      margin="normal"
      variant="outlined"
      // Optional inputs.
      // Pass in text field label. Can be blank.
      label={label || null}
      // Props to pass on to the Input component.
      InputProps={InputProps || null}
      // Type defaults to "text". You can specify "number" as well.
      type={type || "text"}
      // Specify a makeStyles class name, not required.
      className={className || null}
      // Specify an onInput function, optionally.
      onInput={onInput || null}
      // Whether the field is multiline.
      multiline={multiline || null}
    />
  ));

export const FormSelect = memo(({ id, fieldName, value, onChange,
  label, className, children, SelectProps, inputProps }) => (
    <TextField
      // Required inputs.
      // Pass in an ID for React to identify the field.
      id={id}
      // Pass in the state to display in the field.
      value={value}
      // Pass in a callback.
      onChange={e => onChange(fieldName, e.target.value)}
      // Constants
      margin="normal"
      variant="outlined"
      // Select.
      select
      // Optional inputs.
      // Pass in text field label. Can be blank.
      label={label || null}
      // Specify a makeStyles class name, not required.
      className={className || null}
      // Props to put on the Select component.
      SelectProps={SelectProps || null}
      // Props to put on the input.
      inputProps={inputProps || null}
    > {children} </TextField>
  ));
