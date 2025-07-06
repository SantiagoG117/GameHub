import { GameQuery } from "@/App";
import useGenres from "@/hooks/useGenres";
import usePlatforms from "@/hooks/usePlatforms";
import { Heading } from "@chakra-ui/react";
import fetchById from "@/hooks/fetchById";
import usePlatform from "@/hooks/usePlatform";
import useGenre from "@/hooks/useGenre";

interface Props {
  gameQuery: GameQuery | null;
}

function GameHeading({ gameQuery }: Props) {
  const platform = usePlatform(gameQuery?.platformId);
  const genre = useGenre(gameQuery?.genreId);

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;

  return (
    <Heading as="h1" fontSize="5xl" marginY={5}>
      {heading}
    </Heading>
  );
}

export default GameHeading;
