import "./App.css";
import {
  Box,
  Grid,
  GridItem,
  HStack,
  Show,
  useBreakpointValue,
} from "@chakra-ui/react";

import GameGrid from "./components/gameGrid/GameGrid";
import GenreList from "./components/genreSideBar/GenreList";
import PlatformSelector from "./components/gameGrid/PlatformSelector";
import OrderBySelector from "./components/gameGrid/OrderBySelector";
import GameHeading from "./components/gameGrid/GameHeading";
import NavBar from "./components/navBar/NavBar";

/* Query object pattern: Pack all related objects required to query the games inside a single object */

function App() {
  // hook that returns a boolean value based on the current screen size
  const isAboveLg = useBreakpointValue({ base: false, lg: true }); //Values for a screen bigger than 1024px

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`, //Scenario for small screens
        lg: `"nav nav" "aside main"`, // Scenario for large screens
      }}
      /* Defines the width of the Grid's columns */
      templateColumns={{
        base: "1fr", //A Single column streching accross all the available space
        lg: "200px 1fr", // Two columns: One with a fixed size for the aside bar and a second for the grid which streches across all the available space
      }}
    >
      {/* Nav bar */}
      <GridItem area="nav">
        <NavBar />
      </GridItem>

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
  );
}

export default App;
