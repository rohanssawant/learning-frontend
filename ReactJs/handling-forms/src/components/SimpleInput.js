import { useState } from "react";
import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const {
    value: enteredName,
    hasError: nameInputHasError,
    valueChangeEventHandler: nameChangeHandler,
    blurEventHandler: nameBlurHandler,
  } = useInput((v) => v.trim() !== "");
  const isEnteredNameValid = enteredName.trim() !== "";
  const nameIsInValid = isTouched && !isEnteredNameValid;

  const nameChangeEventHandler = (e) => {
    console.log(e.target.value);
    setEnteredName(e.target.value);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    setisTouched(true);
    if (!isEnteredNameValid) {
      return;
    }
    setEnteredName("");
    setisTouched(false);
  };
  const blurEventHandler = () => {
    setisTouched(true);
    if (enteredName.trim() == "") {
      return;
    }
  };
  const formClasses = !nameIsInValid ? "form-control" : "form-control invalid";
  return (
    <form onSubmit={formSubmitHandler}>
      <div className={formClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameChangeEventHandler}
          onBlur={blurEventHandler}
          value={enteredName}
        />
        {nameIsInValid && <p className="error-text">Name is not valid.</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
