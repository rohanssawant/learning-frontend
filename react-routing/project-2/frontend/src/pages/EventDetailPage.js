import React from "react";
import { useParams } from "react-router-dom";

function EventDetailPage() {
  const params = useParams();
  return (
    <>
      <h1>EventDetailPage</h1>
      <main>
        <p>this is {params.eventId}</p>
      </main>
    </>
  );
}

export default EventDetailPage;
