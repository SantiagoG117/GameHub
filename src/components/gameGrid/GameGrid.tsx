import React from "react";
import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "@/hooks/useGames";
import GameCard from "../gameCard/GameCard";
import GameCardSkeleton from "../gameCard/GameCardSkeleton";
import GameCardContainer from "../gameCard/GameCardContainer";
import InfiniteScroll from "react-infinite-scroll-component";
import InfiniteLoader from "./InfiniteLoader";

function GameGrid() {
  // Pass the selected Genre to the useGames hook
  const { data, error, isLoading, fetchNextPage, hasNextPage } = useGames();

  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  if (error) return <Text>{error.message}</Text>;

  /* 
    Dynamically calculates the total number of items we have loaded as we scroll down.
    Everytime the user scrolls down new API response data is fetched in the form of a page
    with results(games), which is being append to the existing pages (data?.pages)
  */
  const fetchedGamesCount = data?.pages.reduce(
    (total, page) => total + page.results.length,
    0
  );

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

      <Text>{error}</Text>

      <InfiniteScroll
        //Keeps track of the number of items we have fetched so far as we scroll down. Everytime it changes, new data is fetched and rendered
        dataLength={fetchedGamesCount || 0}
        // Function to fetch the next page
        next={fetchNextPage}
        hasMore={!!hasNextPage}
        loader={<InfiniteLoader />}
      >
        <SimpleGrid
          columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
          gap={3}
          padding="10px"
        >
          {/* 
          data is an instance of InfiniteData. The pages parameter contains the data for all pages.
          We must iterate over each page object in pages and render the data for each page separately. 
        */}
          {data?.pages.map((page, index) => (
            <React.Fragment key={index}>
              {page?.results.map((game) => (
                <GameCardContainer key={game.id}>
                  <GameCard game={game} />
                </GameCardContainer>
              ))}
            </React.Fragment>
          ))}
        </SimpleGrid>
      </InfiniteScroll>
    </>
  );
}

export default GameGrid;
