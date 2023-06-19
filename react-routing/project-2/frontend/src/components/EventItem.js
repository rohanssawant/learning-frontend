import { Link, useSubmit } from "react-router-dom";
import classes from "./EventItem.module.css";

function EventItem({ event }) {
  const submit = useSubmit();
  function startDeleteHandler() {
    // prompt user if he wants to delete. Built-in browser method CONFIRM is present
    const proceed = window.confirm("Are you sure ?");
    // Delete event
    if (proceed) {
      submit(null, { method: "DELETE" });
    }
  }

  return (
    <article className={classes.event}>
      <img src={event.image} alt={event.title} />
      <h1>{event.title}</h1>
      <time>{event.date}</time>
      <p>{event.description}</p>
      <menu className={classes.actions}>
        <Link to={`edit`}>Edit</Link>
        <button onClick={startDeleteHandler}>Delete</button>
      </menu>
    </article>
  );
}

export default EventItem;
