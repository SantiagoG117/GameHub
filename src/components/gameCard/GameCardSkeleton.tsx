import { Box, Card, Skeleton, SkeletonText } from "@chakra-ui/react";

function GameCardSkeleton() {
  return (
    <Card.Root >
      <Skeleton height="250px" />
      <Box padding="4">
        <SkeletonText noOfLines={2} />
      </Box>
    </Card.Root>
  );
}

export default GameCardSkeleton;
