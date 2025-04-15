import "./App.css";
import { Grid, GridItem, Show, useBreakpointValue } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/gameCard/GameGrid";
import GenreList from "./components/sideBar/GenreList";
import { useState } from "react";
import { Genres } from "./hooks/useGenres";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genres | null>(null);
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
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show when={isAboveLg}>
        <GridItem area="aside" paddingX={5}>
          {/* App component is notified by the GenreList component that a Genre was selected and receives it */}
          <GenreList onSelectedGenre={(genre) => setSelectedGenre(genre)} />
        </GridItem>
      </Show>
      <GridItem area="main">
        <GameGrid selectedGenre={selectedGenre} />
      </GridItem>
    </Grid>
  );
}

export default App;
