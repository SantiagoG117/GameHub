import useGame from "@/hooks/useGame";
import { Heading, Spinner, Text } from "@chakra-ui/react";
import React from "react";
import { useParams } from "react-router-dom";

function GameDetailPage() {
  //Extract params values from the URL
  const params = useParams();
  const { data, isLoading, error } = useGame(params.gameName);

  if (isLoading) return <Spinner />;
  return (
    <>
      <Heading>{data?.name}</Heading>
      <Text>{data?.description_raw}</Text>
    </>
  );
}

export default GameDetailPage;
