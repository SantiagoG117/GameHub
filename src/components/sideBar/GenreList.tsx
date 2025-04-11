import useGenres from "@/hooks/useGenres";
import getCroppedImageUrl from "@/services/image-url";
import { HStack, Image, List, Text } from "@chakra-ui/react";

function GenreList() {
  const { data } = useGenres();

  return (
    <List.Root listStyleType="none">
      {data.map((genre) => (
        <List.Item key={genre.id} padding="5px">
          <HStack>
            <Image
              src={getCroppedImageUrl(genre.image_background)}
              boxSize="32px"
              borderRadius={8}
            />
            <Text fontSize={"lg"}>{genre.name}</Text>
          </HStack>
        </List.Item>
      ))}
    </List.Root>
  );
}

export default GenreList;
