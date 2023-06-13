import { useLoaderData } from "react-router-dom";
import EventsList from "../components/EventsList";

export async function loader() {
  const response = await fetch("http://localhost:8080/events");
  if (!response.ok) {
    // setError("Fetching events failed.");
    console.log(response);
  } else {
    const resData = await response.json();
    return resData.events;
  }
}

function EventsPage() {
  const eventsData = useLoaderData();
  return (
    <>
      <EventsList events={eventsData} />
    </>
  );
}

export default EventsPage;
