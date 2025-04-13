import {
  HStack,
  List,
  Skeleton,
  SkeletonCircle,
  Stack,
} from "@chakra-ui/react";

function GenreSkeleton() {
  return (
    <List.Item paddingBottom={1}>
      <HStack gap="5">
        <SkeletonCircle size="12" />
        <Stack flex="1">
          <Skeleton height="5" />
        </Stack>
      </HStack>
    </List.Item>
  );
}

export default GenreSkeleton;
