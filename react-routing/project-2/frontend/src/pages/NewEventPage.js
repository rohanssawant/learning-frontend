import React from "react";
import { json, redirect } from "react-router-dom";
import EventForm from "../components/EventForm";

export async function action({ request, params }) {
  const data = await request.formData();
  const event = {
    title: data.get("title"),
    image: data.get("image"),
    date: data.get("date"),
    description: data.get("description"),
  };
  console.log(event);
  const resp = await fetch("http://localhost:8080/events", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(event),
  });

  // Return BE validation errors
  if (resp.status === 422) {
    return resp;
  }

  if (!resp.ok) {
    throw json({ message: "Something went wrong!" }, { status: 500 });
  }
  return redirect("/events");
}

function NewEventPage() {
  function submitHandler(e) {
    e.preventDefault();
  }
  return <EventForm />;
}

export default NewEventPage;
