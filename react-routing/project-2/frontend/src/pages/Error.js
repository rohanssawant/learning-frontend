import React from "react";
import { useRouteError } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
import PageContent from "../components/PageContent";

function Error() {
  const err = useRouteError();
  let title = "An error occurred";
  let msg = "Something went wrong!";

  if (err.status === 500) {
    msg = JSON.parse(err.data).message;
  }

  if (err.status === 404) {
    title = "Not found";
    msg = "Could not find the requested resources!";
  }

  return (
    <>
      <MainNavigation />
      <PageContent title={title}>
        <p>{msg}</p>
      </PageContent>
    </>
  );
}

export default Error;
