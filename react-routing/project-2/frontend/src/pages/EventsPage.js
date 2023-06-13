import { json, useLoaderData } from "react-router-dom";
import EventsList from "../components/EventsList";

export async function loader() {
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
    return response;
  }
}

function EventsPage() {
  const data = useLoaderData();
  if (data.isError) return <p>{data.message}</p>;
  const events = data.events;

  return (
    <>
      <EventsList events={events} />
    </>
  );
}

export default EventsPage;
