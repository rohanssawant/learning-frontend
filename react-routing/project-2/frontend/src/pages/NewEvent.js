import React from "react";
import { json, redirect } from "react-router-dom";
import EventForm from "../components/EventForm";

function NewEventPage() {
  function submitHandler(e) {
    e.preventDefault();
  }
  return <EventForm method="post" />;
}

export default NewEventPage;
