import React from "react";
import { useState } from "react";

const useInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const isEnteredValueValid = validateValue(enteredValue);
  const hasError = isTouched && !isEnteredValueValid;

  const valueChangeEventHandler = (e) => {
    console.log(e.target.value);
    setEnteredValue(e.target.value);
  };
  const blurEventHandler = (e) => {
    setIsTouched(true);
  };

  return {
    value: enteredValue,
    isValid: isEnteredValueValid,
    hasError,
    valueChangeEventHandler,
    blurEventHandler,
  };
};

export default useInput;
