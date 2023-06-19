import {
  Form,
  json,
  redirect,
  useActionData,
  useNavigate,
  useNavigation,
} from "react-router-dom";

import classes from "./EventForm.module.css";

export async function action({ request, params }) {
  const data = await request.formData();
  const event = {
    title: data.get("title"),
    image: data.get("image"),
    date: data.get("date"),
    description: data.get("description"),
  };
  console.log(request.method);
  console.log(event);
  let url = "http://localhost:8080/events";
  if (request.method === "PATCH") {
    url = `http://localhost:8080/events/${params.eventId}`;
  }
  const resp = await fetch(url, {
    method: request.method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(event),
  });
  console.log(resp);
  // Return BE validation errors
  if (resp.status === 422) {
    return resp;
  }

  if (!resp.ok) {
    throw json({ message: "Something went wrong!" }, { status: 500 });
  }
  return redirect("/events");
}

function EventForm({ method, event }) {
  const navigate = useNavigate();
  const navigation = useNavigation();
  const errData = useActionData();

  // check if form is currently submitting & give feedback acc
  const isSubmitting = navigation.state === "submitting";

  function cancelHandler() {
    navigate("..");
  }

  return (
    <Form method={method} className={classes.form}>
      {errData && errData.errors && (
        <ul>
          {Object.values(errData.errors).map((e) => (
            <li key={e}>{e}</li>
          ))}
        </ul>
      )}
      <p>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          name="title"
          // required
          defaultValue={event ? event.title : ""}
        />
      </p>
      <p>
        <label htmlFor="image">Image</label>
        <input
          id="image"
          type="url"
          name="image"
          // required
          defaultValue={event ? event.image : ""}
        />
      </p>
      <p>
        <label htmlFor="date">Date</label>
        <input
          id="date"
          type="date"
          name="date"
          // required
          defaultValue={event ? event.date : ""}
        />
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          rows="5"
          // required
          defaultValue={event ? event.description : ""}
        />
      </p>
      <div className={classes.actions}>
        <button type="button" onClick={cancelHandler} disabled={isSubmitting}>
          Cancel
        </button>
        <button disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Save"}
        </button>
      </div>
    </Form>
  );
}

export default EventForm;
