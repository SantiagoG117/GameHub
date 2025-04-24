import { GameQuery } from "@/App";
import { Heading } from "@chakra-ui/react";

interface Props {
  gameQuery: GameQuery | null;
}

function GameHeading({ gameQuery }: Props) {
  /* 
    String literal: Create strings that allow embedded JavaScript expressions in the form of string interpolation: ${expression} 
    to create dynamic content
  */
  const heading = `${gameQuery?.platform?.name || ""} ${
    gameQuery?.genre?.name || ""
  } Games`;

  return (
    <Heading as="h1" fontSize="5xl" marginY={5}>
      {heading}
    </Heading>
  );
}

export default GameHeading;
