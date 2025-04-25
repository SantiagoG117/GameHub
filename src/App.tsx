import "./App.css";
import {
  Box,
  Grid,
  GridItem,
  HStack,
  Show,
  useBreakpointValue,
} from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/gameGrid/GameGrid";
import GenreList from "./components/sideBar/GenreList";
import { useState } from "react";
import { genres } from "./hooks/useGenres";
import PlatformSelector from "./components/gameGrid/PlatformSelector";
import { Platforms } from "./hooks/usePlatforms";
import OrderBySelector from "./components/gameGrid/OrderBySelector";
import GameHeading from "./components/gameGrid/GameHeading";

/* Query object pattern: Pack all related objects required to query the games inside a single object */
export interface GameQuery {
  genre: genres | null;
  platform: Platforms | null;
  sortOrder: { value: string; label: string };
  searchedText: string | null;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery); //Initialize the state as an empty GameQuery object

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
        <NavBar
          onSearch={(searchedText) =>
            setGameQuery({ ...gameQuery, searchedText })
          }
        />
      </GridItem>

      {/* Genre side bar */}
      <Show when={isAboveLg}>
        <GridItem area="aside" paddingX={5}>
          {/* App component is notified by the GenreList component that a Genre was selected and receives it */}
          <GenreList
            onSelectedGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
            selectedGenre={gameQuery.genre}
          />
        </GridItem>
      </Show>

      {/* Game Grid */}
      <GridItem area="main">
        <Box paddingLeft={2}>
          <GameHeading gameQuery={gameQuery} />
          <HStack spaceX={2}>
            <PlatformSelector
              /*App component is notified by the PlatformSelector that a platform was selected and receives it  */
              onSelectedPlatform={(platform) =>
                setGameQuery({ ...gameQuery, platform })
              }
              // The parent component sends the current state of the selectedPlatform back to the Platform component
              selectedPlatform={gameQuery.platform}
            />
            <OrderBySelector
              onSelectedSortOrder={(sortOrder) =>
                setGameQuery({ ...gameQuery, sortOrder })
              }
              selectedSortOrder={gameQuery.sortOrder}
            />
          </HStack>
        </Box>

        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
