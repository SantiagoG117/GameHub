import { GameQuery } from "@/App";
import genres from "@/data/genres";
import platforms from "@/data/platforms";
import { Heading } from "@chakra-ui/react";

interface Props {
  gameQuery: GameQuery | null;
}

function GameHeading({ gameQuery }: Props) {
  /* 
    TODO: As part of the refactoring, this component will break because we are calling platform?.name and genre?.name
        ! Use useGames and useGenres hook to find the platform and genre with the given id. Once we get each object we can
        ! render their respective name
  */

  const genre = genres.find((genre) => genre.id === gameQuery?.genreId);
  const platform = platforms.find(
    (platform) => platform.id === gameQuery?.platformId
  );
  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;

  return (
    <Heading as="h1" fontSize="5xl" marginY={5}>
      {heading}
    </Heading>
  );
}

export default GameHeading;
