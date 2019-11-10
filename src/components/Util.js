import React, { useState, useEffect, memo } from "react";

import isEqual from "lodash/isEqual";

import {
  TextField,
  FormControlLabel,
  Checkbox,
  Grid,
  Card,
  CardContent
} from "@material-ui/core";

export const measureText = (text, fontWeight, fontSize, fontFamily) => {
  // Create a singleton canvas or use an existing one.
  const canvas =
    measureText.canvas ||
    (measureText.canvas = document.createElement("canvas"));

  const context = canvas.getContext("2d");
  context.font = `${fontWeight} ${fontSize}px ${fontFamily}`;
  return context.measureText(text).width;
};

export const hexToRgb = hex => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      }
    : null;
};

// Displays a NerdFonts font icon.
export const Icon = memo(({ icon, className }) => {
  return (
    <div>
      <i className={`nf ${icon || "nf-fa-amazon"} ${className || null}`} />
    </div>
  );
});

// Displays an image file from its source URL.
export const Image = memo(({ source, className, style }) => {
  return (
    <img
      alt=""
      src={source}
      className={className || null}
      style={style || null}
    />
  );
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
};

// The standard form field. Memoized for performance.
// The className,
export const FormText = memo(
  ({
    id,
    fieldName,
    value,
    onChange,
    label,
    type,
    className,
    onInput,
    multiline,
    helperText,
    InputProps
  }) => (
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
      // Specify helper text below the field, optionally.
      helperText={helperText || null}
      // Whether the field is multiline.
      multiline={multiline || false}
    />
  ),
  (prevState, nextState) => {
    isEqual(prevState.value, nextState.value);
  }
);

export const FormSelect = memo(
  ({
    id,
    fieldName,
    value,
    onChange,
    label,
    className,
    children,
    SelectProps,
    inputProps
  }) => (
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
    >
      {children}
    </TextField>
  ),
  (prevState, nextState) => {
    isEqual(prevState.value, nextState.value);
  }
);

export const FormCheckbox = memo(({ checked, fieldName, onChange, label }) => (
  <FormControlLabel
    control={
      <Checkbox
        checked={checked}
        onChange={e => onChange(fieldName, e.target.checked)}
      />
    }
    label={label}
  />
));

export const GridCard = ({
  ref,
  gridClassName,
  cardClassName,
  children,
  xs,
  sm,
  md,
  lg,
  xl
}) => (
  <Grid item className={gridClassName} xs={xs} sm={sm} md={md} lg={lg} xl={xl}>
    <Card ref={ref} className={cardClassName}>
      <CardContent>{children}</CardContent>
    </Card>
  </Grid>
);
