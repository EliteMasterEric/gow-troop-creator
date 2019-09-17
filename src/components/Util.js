
export const validateFieldLength = maxLength => event => {
  if (event.target.value.length > maxLength) {
    event.target.value = event.target.value.slice(0, event.target.maxLength);
  }
};
