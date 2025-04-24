import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode; // ReactNode represents anything that can be rendered by React.
}
// Styled box that serves as a container for GameCard or GameCardSkeleton components
function GameCardContainer({ children }: Props) {
  return (
    <Box borderRadius={10} overflow="hidden" width="100%">
      {children}
    </Box>
  );
}

export default GameCardContainer;
