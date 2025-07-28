import { Heading } from "@chakra-ui/react";
import usePlatform from "@/hooks/usePlatform";
import useGenre from "@/hooks/useGenre";
import useGameQueryStore from "@/stateManagement/GameQueryStore";

function GameHeading() {
  // Selector: Component will only be dependent on platformId and genreId. Any other changes in the Global state won't cause a re-render
  const platformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const platform = usePlatform(platformId);

  const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const genre = useGenre(genreId);

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;

  return (
    <Heading as="h1" fontSize="5xl" marginY={5}>
      {heading}
    </Heading>
  );
}

export default GameHeading;
