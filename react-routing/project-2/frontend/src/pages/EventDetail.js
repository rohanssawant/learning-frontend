import React from "react";
import {
  json,
  redirect,
  useLoaderData,
  useParams,
  useRouteLoaderData,
} from "react-router-dom";
import EventItem from "../components/EventItem";

export async function loader({ request, params }) {
  const response = await fetch(
    `http://localhost:8080/events/${params.eventId}`
  );
  if (!response.ok) {
    throw json({ message: "Could not fetch selected event!" }, { status: 500 });
  } else {
    return response;
  }
}
// Delete an event
export async function action({ request, params }) {
  const resp = await fetch(`http://localhost:8080/events/${params.eventId}`, {
    method: request.method,
  });
  if (!resp.ok) {
    throw json(
      { message: "Could not delete selected event!" },
      { status: 500 }
    );
  }
  return redirect("/events");
}

function EventDetailPage() {
  const params = useParams();
  // const response = useLoaderData();
  const response = useRouteLoaderData("event-detail");

  return (
    <>
      <EventItem event={response.event} />
    </>
  );
}

export default EventDetailPage;
