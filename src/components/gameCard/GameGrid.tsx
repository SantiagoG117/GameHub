import { SimpleGrid, Text, Box } from "@chakra-ui/react";
import useGames from "@/hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genres } from "@/hooks/useGenres";

interface Props {
  selectedGenre: Genres | null;
}

function GameGrid({ selectedGenre }: Props) {
  // Pass the selected Genre to the useGames hook
  const { data, error, isLoading } = useGames(selectedGenre);


  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


  return (
    <>
      {isLoading && (
        <SimpleGrid
          columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
          gap="20px"
          padding="10px"
        >
          {skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        </SimpleGrid>
      )}

      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        gap={3}
        padding="10px"
      >
        {data.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
}

export default GameGrid;
