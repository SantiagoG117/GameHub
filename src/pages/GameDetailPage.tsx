import ExpandableText from "@/components/ExpandableText";
import useGame from "@/hooks/useGame";
import { Button, Heading, Spinner, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { useParams } from "react-router-dom";

function GameDetailPage() {
  //Extract params values from the URL
  const params = useParams();
  const { data, isLoading, error } = useGame(params.gameName);
  const [isCut, setIsCut] = useState(true);

  //Make sure the description is long enough
  const isLongDescription =
    data?.description_raw && data.description_raw.length >= 400;

  //Set the dynamic text for the description
  const description =
    isCut && isLongDescription
      ? data.description_raw.slice(0, 400) + "... "
      : data?.description_raw;

  if (isLoading) return <Spinner />;
  return (
    <>
      <Heading>{data?.name}</Heading>
      <ExpandableText text={data?.description_raw || ""} />
    </>
  );
}

export default GameDetailPage;
