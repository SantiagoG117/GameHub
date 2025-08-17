import ExpandableText from "@/components/ExpandableText";
import GameAttributes from "@/components/gameDetails/GameAttributes";
import GameDetailsSekeleton from "@/components/gameDetails/GameDetailsSekeleton";
import GameMedia from "@/components/gameDetails/GameMedia";
import useGame from "@/hooks/useGame";
import { Box, Flex, Heading } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

/* 
  TODO:
  ! Build Skeletons for Game Details page
  ! Make the GameDetailPage responsive
*/

function GameDetailPage() {
  const params = useParams();
  const { data, isLoading, error } = useGame(params.gameName);

  if (isLoading) return <GameDetailsSekeleton />;
  return (
    <>
      <Heading>{data?.name}</Heading>
      <ExpandableText text={data?.description_raw || ""} />
      <Flex gap={8} align="flex-start">
        <Box flex="1">
          <GameAttributes game={data} />
        </Box>
        <Box flex="1">
          <GameMedia gameId={data?.id} />
        </Box>
      </Flex>
    </>
  );
}

export default GameDetailPage;
