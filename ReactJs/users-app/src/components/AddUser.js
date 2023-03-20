import { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import ErrorModal from "./ErrorModal";

export default function AddUser(props) {
  const [username, setusername] = useState("");
  const [age, setage] = useState("");
  const [error, setError] = useState();

  function addUserHandler(e) {
    e.preventDefault();
    if (username.trim().length === 0 || age.trim().length === 0 || +age < 1) {
      console.log("wrong");
      setError({
        title: "Invalid Input",
        message: "Enter a valid name and age ( non empty & age > 0 )",
      });
      return;
    }
    props.onAddUser({ id: Math.random().toString(), username, age });
    setusername("");
    setage("");
  }

  function usernameChangeHandler(e) {
    setusername(e.target.value);
  }

  function ageChangeHandler(e) {
    setage(e.target.value);
  }

  function errorHandler() {
    setError(false);
  }

  return (
    <div>
      {error ? (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      ) : null}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={usernameChangeHandler}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            value={age}
            onChange={ageChangeHandler}
          />
          <Button type="Submit" onClick={addUserHandler}>
            Add User
          </Button>
        </form>
      </Card>
    </div>
  );
}
