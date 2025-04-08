import { Box, Card, Skeleton, SkeletonText } from "@chakra-ui/react";

function GameCardSkeleton() {
  return (
    <Box borderRadius={10} overflow="hidden">
      <Card.Root width="300px" height="300px">
        <Skeleton height="60%" />
        <Box padding="4">
          <SkeletonText noOfLines={2} />
        </Box>
      </Card.Root>
    </Box>
  );
}

export default GameCardSkeleton;
