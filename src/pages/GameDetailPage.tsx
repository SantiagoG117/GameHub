import ExpandableText from "@/components/ExpandableText";
import GameAttributes from "@/components/GameAttributes";
import GameTrailer from "@/components/GameTrailer";
import useGame from "@/hooks/useGame";
import { Box, Flex, Heading, Spinner } from "@chakra-ui/react";
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
      <Flex gap={8} align="flex-start">
        <Box flex="1">
          <GameAttributes game={data} />
        </Box>
        <Box flex="1">
          <GameTrailer game={data} />
        </Box>
      </Flex>
    </>
  );
}

export default GameDetailPage;
