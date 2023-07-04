import React, { Suspense } from "react";
import {
  Await,
  defer,
  json,
  redirect,
  useLoaderData,
  useParams,
  useRouteLoaderData,
} from "react-router-dom";
import EventItem from "../components/EventItem";
import EventsList from "../components/EventsList";

async function loadEvents() {
  const response = await fetch("http://localhost:8080/events");
  if (!response.ok) {
    // setError("Fetching events failed.");
    console.log(response);
    // return { isError: true, message: "Could not load events" };
    // throw { message: "Could not load events" };
    // throw new Response(JSON.stringify({ message: "Could not load events" }), {
    //   status: 500,
    // });
    throw json({ message: "Could not load events" }, { status: 500 });
  } else {
    const respParsed = await response.json();
    console.log(respParsed);
    return respParsed.events;
  }
}

async function loadEvent(eventId) {
  const response = await fetch(`http://localhost:8080/events/${eventId}`);
  if (!response.ok) {
    throw json({ message: "Could not fetch selected event!" }, { status: 500 });
  } else {
    const respParsed = await response.json();
    return respParsed.event;
  }
}

export async function loader({ request, params }) {
  return defer({
    events: loadEvents(), // This will come or not does not depend if page is rendered or not
    event: await loadEvent(params.eventId), // This await will make sure that details are loaded before page is rendered
  });
}

// Action to Delete an event using submit()
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
  // const response = useLoaderData();
  const { event, events } = useRouteLoaderData("event-detail");

  return (
    <>
      <Suspense fallback={<p>Loading...</p>}>
        <Await resolve={event}>
          {(loadedEvent) => <EventItem event={loadedEvent} />}
        </Await>
      </Suspense>

      <Suspense fallback={<p>Loading...</p>}>
        <Await resolve={events}>
          {(loadedEvents) => <EventsList events={loadedEvents} />}
        </Await>
      </Suspense>
    </>
  );
}

export default EventDetailPage;
