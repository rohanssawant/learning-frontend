import React from "react";
import { json, useLoaderData, useParams } from "react-router-dom";
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

function EventDetailPage() {
  const params = useParams();
  const response = useLoaderData();

  return (
    <>
      {/* <EventItem /> */}
      <p>{JSON.stringify(response)}</p>
    </>
  );
}

export default EventDetailPage;
