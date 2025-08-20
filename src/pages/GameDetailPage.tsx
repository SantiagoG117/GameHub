import ExpandableText from "@/components/ExpandableText";
import GameAttributes from "@/components/gameDetails/GameAttributes";
import GameDetailsSekeleton from "@/components/gameDetails/GameDetailsSekeleton";
import GameMedia from "@/components/gameDetails/GameMedia";
import GenreHamburger from "@/components/gameGrid/GenreHamburger";
import useGame from "@/hooks/useGame";
import { Box, Flex, Heading } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

function GameDetailPage() {
  const params = useParams();
  const { data, isLoading, error } = useGame(params.gameName);

  if (isLoading) return <GameDetailsSekeleton />;
  return (
    <>
      <Heading fontSize={["2xl", "3xl", "4xl", "5xl"]} paddingBottom={4}>
        {data?.name}
      </Heading>
      <ExpandableText text={data?.description_raw || ""} />
      <Flex
        gap={[4, 6, 8]}
        align="flex-start"
        direction={["column", "column", "row"]}
      >
        <Box flex="1">
          <GameAttributes game={data} />
        </Box>
        {/* Only apply flex 1 on large screens for responsive desing*/}
        <Box width="100%" flex={["unset", "unset", "1"]}>
          <GameMedia gameId={data?.id} />
        </Box>
      </Flex>
    </>
  );
}

export default GameDetailPage;
