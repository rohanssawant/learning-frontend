import { useState } from "react";
import USERS_DUMMY from "../users";
import LoginForm from "./LoginForm";
function Login() {
  const [isLoggedIn, setLogIn] = useState(false);

  function toggleLoggedIn() {
    if (isLoggedIn) return setLogIn(false);
    return setLogIn(true);
  }
  let u;
  function authenticateUser(userDetails) {
    const { userName, password } = userDetails;
    u = USERS_DUMMY.find((user) => {
      if (user.username === userName) return user;
    });
    if (!u.password === password) u = "";
  }
  if (!u) {
    return <p>Username or password incorrect</p>;
  }
  const { firstName, lastName, email, image } = u;

  return (
    <div>
      <LoginForm onSubmit={authenticateUser} />
    </div>
  );
}

export default Login;
