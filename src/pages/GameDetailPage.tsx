import AttributesBox from "@/components/AttributesBox";
import ExpandableText from "@/components/ExpandableText";
import GameAttributes from "@/components/gameAttributes";
import CriticScore from "@/components/gameCard/CriticScore";
import useGame from "@/hooks/useGame";
import { Heading, List, SimpleGrid, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

function GameDetailPage() {
  //Extract params values from the URL
  const params = useParams();
  const { data, isLoading, error } = useGame(params.gameName);

  if (isLoading) return <Spinner />;
  return (
    <>
      <Heading>{data?.name}</Heading>
      <ExpandableText text={data?.description_raw || ""} />
      <GameAttributes game={data} />
    </>
  );
}

export default GameDetailPage;
