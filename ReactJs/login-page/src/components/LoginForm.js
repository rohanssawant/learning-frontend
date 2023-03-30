import { useState } from "react";
import Card from "../UI/Card";
import classes from "./LoginForm.module.css";
function LoginForm({ onSubmit, onError }) {
  const [userName, setuserName] = useState("");
  const [password, setpassword] = useState("");

  function submitForm(e) {
    e.preventDefault();

    if (userName.trim().length === 0 || password.trim().length === 0) {
      return onError({ msg: "Enter a valid non empty input values." });
    }

    let userDetails = {
      userName,
      password,
    };
    onSubmit(userDetails);
    setuserName("");
    setpassword("");
  }
  function takeUserInput(e) {
    setuserName(e.target.value);
  }

  function takePasswordInput(e) {
    setpassword(e.target.value);
  }

  return (
    <Card className={classes.input}>
      <form onSubmit={submitForm}>
        <label htmlFor="uname">User Name:</label>
        <input
          type="text"
          id="uname"
          name="uname"
          onChange={takeUserInput}
          value={userName}
        ></input>
        <label htmlFor="passwd">Password:</label>
        <input
          type="password"
          id="passwd"
          name="passwd"
          onChange={takePasswordInput}
          value={password}
        ></input>
        <button type="submit">Submit</button>
      </form>
    </Card>
  );
}

export default LoginForm;
