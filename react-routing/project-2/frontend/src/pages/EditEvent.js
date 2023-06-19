import React from "react";
import { useLoaderData, useRouteLoaderData } from "react-router-dom";
import EventForm from "../components/EventForm";

function EditEventPage() {
  // const data = useLoaderData();
  const data = useRouteLoaderData("event-detail");
  return <EventForm event={data.event} method="patch" />;
}

export default EditEventPage;
