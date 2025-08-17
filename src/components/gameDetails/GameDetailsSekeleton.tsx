import { Box, Flex, Skeleton, SkeletonText } from "@chakra-ui/react";

function GameDetailsSekeleton() {
  return (
    <>
      {/* Heading */}
      <Skeleton height="48px" width="60%" mb={4} borderRadius="md" />
      {/* Text */}
      <SkeletonText noOfLines={3} gap="1" width="100%" />
      <Flex gap={8} align="flex-start" paddingTop={2}>
        {/* GameAttributes Skeleton */}
        <Box flex="1">
          <Skeleton height="300px" borderRadius="md" />
        </Box>
        {/* GameMedia Skeleton */}
        <Box flex="1">
          <Skeleton height="300px" borderRadius="md" />
        </Box>
      </Flex>
    </>
  );
}

export default GameDetailsSekeleton;
