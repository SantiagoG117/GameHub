import GameGrid from "@/components/gameGrid/GameGrid";
import GameHeading from "@/components/gameGrid/GameHeading";
import OrderBySelector from "@/components/gameGrid/OrderBySelector";
import PlatformSelector from "@/components/gameGrid/PlatformSelector";
import GenreList from "@/components/genreSideBar/GenreList";
import {
  Box,
  Grid,
  GridItem,
  HStack,
  Show,
  useBreakpointValue,
} from "@chakra-ui/react";

function HomePage() {
  // hook that returns a boolean value based on the current screen size
  const isAboveLg = useBreakpointValue({ base: false, lg: true }); //Values for a screen bigger than 1024px

  return (
    <>
      <Grid
        templateAreas={{
          base: `"main"`, //Scenario for small screens
          lg: ` "aside main"`, // Scenario for large screens
        }}
        /* Defines the width of the Grid's columns */
        templateColumns={{
          base: "1fr", //A Single column streching accross all the available space
          lg: "200px 1fr", // Two columns: One with a fixed size for the aside bar and a second for the grid which streches across all the available space
        }}
      >
        {/* Genre side bar */}
        <Show when={isAboveLg}>
          <GridItem area="aside" paddingX={5}>
            <GenreList />
          </GridItem>
        </Show>

        {/* Game Grid */}
        <GridItem area="main">
          <Box paddingLeft={2}>
            <GameHeading />
            <HStack spaceX={2}>
              <PlatformSelector />
              <OrderBySelector />
            </HStack>
          </Box>
          {/* Games Grid */}
          <GameGrid />
        </GridItem>
      </Grid>
    </>
  );
}

export default HomePage;
