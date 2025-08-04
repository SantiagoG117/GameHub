import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode; // ReactNode represents anything that can be rendered by React.
}
// Styled box that serves as a container for GameCard or GameCardSkeleton components
function GameCardContainer({ children }: Props) {
  return (
    <Box
      borderRadius={10}
      overflow="hidden"
      width="100%"
      transition="transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out"
      _hover={{
        transform: "scale(1.04)",
      }}
    >
      {children}
    </Box>
  );
}

export default GameCardContainer;
