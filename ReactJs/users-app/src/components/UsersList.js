import Card from "../UI/Card";
import classes from "./UsersList.module.css";

export default function UsersList(props) {
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((u) => (
          <li key={u.id}>
            {u.username} ({u.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
}
