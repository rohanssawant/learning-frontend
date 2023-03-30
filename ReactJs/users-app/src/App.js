import React, { useState } from "react";
import AddUser from "./components/AddUser";
import UsersList from "./components/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);
  function addUserHandler(user) {
    console.log(user);
    setUsersList((prevState) => {
      return [...prevState, user];
    });
  }
  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
