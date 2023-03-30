import { useState } from "react";
import USERS_DUMMY from "../users";
import PopUpCard from "./PopUpCard";
import LoginForm from "./LoginForm";
function Login() {
  const [isLoggedIn, setLogIn] = useState(false);
  const [error, setError] = useState();
  const [loggedInUser, setLoggedInUser] = useState();
  function toggleLoggedIn() {
    if (isLoggedIn) return setLogIn(false);
    return setLogIn(true);
  }

  function errConfirmed() {
    return setError();
  }

  function errorHandler(err) {
    return setError(err);
  }

  function logOutUser() {
    setLogIn(false);
    setLoggedInUser();
    return;
  }

  function authenticateUser(userDetails) {
    const { userName, password } = userDetails;
    let u = USERS_DUMMY.find((user) => {
      if (user.username === userName) return user;
      return;
    });
    if (!u || (u && u.password !== password))
      return errorHandler({ msg: "Invalid username or password" });
    setLogIn(true);
    const { firstName, lastName, email, image } = u;
    setLoggedInUser({ firstName, lastName, email, image });
  }

  return (
    <div>
      {error ? (
        <PopUpCard message={error.msg} onConfirm={errConfirmed} />
      ) : null}
      <LoginForm onSubmit={authenticateUser} onError={errorHandler} />
      {isLoggedIn ? (
        <PopUpCard
          image={loggedInUser.image}
          message={`Hi there ${loggedInUser.firstName}. Logged in with email: ${loggedInUser.email}`}
          onConfirm={logOutUser}
        ></PopUpCard>
      ) : null}
    </div>
  );
}

export default Login;
