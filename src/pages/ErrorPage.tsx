import NavBar from "@/components/navBar/NavBar";
import { Box } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();
  return (
    <>
      <NavBar />
      <Box padding={5}>
        <h1>Oops...</h1>
        <p>
          {isRouteErrorResponse(error)
            ? "This page doesn't exist"
            : "Sorry, an unexpected error occured"}
        </p>
      </Box>
    </>
  );
}

export default ErrorPage;
