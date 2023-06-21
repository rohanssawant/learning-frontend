import { Suspense } from "react";
import { Await, defer, json, useLoaderData } from "react-router-dom";
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

export function loader() {
  return defer({ events: loadEvents() });
}

function EventsPage() {
  const { events } = useLoaderData();
  // if (data.isError) return <p>{data.message}</p>;
  // const events = data.events;

  return (
    <Suspense fallback={<p style={{ textAlign: "center" }}>Loading....</p>}>
      <Await resolve={events}>
        {(loadedEvents) => <EventsList events={loadedEvents} />}
      </Await>
    </Suspense>
  );
}

export default EventsPage;
