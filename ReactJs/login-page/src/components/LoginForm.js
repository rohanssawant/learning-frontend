import { useState } from "react";

function LoginForm({ onSubmit }) {
  const [userName, setuserName] = useState("");
  const [password, setpassword] = useState("");

  function submitForm(e) {
    e.preventDefault();
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
    <>
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
    </>
  );
}

export default LoginForm;
