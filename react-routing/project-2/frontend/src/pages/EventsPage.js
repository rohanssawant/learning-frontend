import React from "react";
import { Link } from "react-router-dom";
const E = [
  {
    id: "e1",
    title: "A dummy event",
    date: "2023-02-22",
    image:
      "https://blog.hubspot.de/hubfs/Germany/Blog_images/Optimize_Marketing%20Events%20DACH%202021.jpg",
    description: "Join this amazing event and connect with fellow developers.",
  },
  {
    id: "e2",
    title: "A dummy event-2",
    date: "2023-02-22",
    image:
      "https://blog.hubspot.de/hubfs/Germany/Blog_images/Optimize_Marketing%20Events%20DACH%202021.jpg",
    description: "Join this amazing event and connect with fellow developers.",
  },
  {
    id: "e3",
    title: "A dummy event-3",
    date: "2023-02-22",
    image:
      "https://blog.hubspot.de/hubfs/Germany/Blog_images/Optimize_Marketing%20Events%20DACH%202021.jpg",
    description: "Join this amazing event and connect with fellow developers.",
  },
];
function EventsPage() {
  return (
    <>
      <h1>EventsPage</h1>
      <main>
        <ul>
          {E.map((e) => (
            <li key={e.id}>
              <Link to={`/events/${e.id}`}>{e.title}</Link>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}

export default EventsPage;
