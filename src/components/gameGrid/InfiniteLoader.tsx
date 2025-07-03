import { Spinner, Text, VStack } from "@chakra-ui/react";

function InfiniteLoader() {
  return (
    <VStack colorPalette="yellow" padding={3}>
      <Spinner size="xl" color="colorPalette.600" />
      <Text fontSize={20} color="colorPalette.600">
        Loading...
      </Text>
    </VStack>
  );
}

export default InfiniteLoader;
