import useGenres, { genres } from "@/hooks/useGenres";
import getCroppedImageUrl from "@/services/image-url";
import { Button, Heading, HStack, Image, List } from "@chakra-ui/react";
import GenreSkeleton from "./GenreSkeleton";

interface Props {
  onSelectedGenre: (genre: genres) => void; // Notifies the parent of this component that a Genre has been selected
  selectedGenre: genres | null;
}

function GenreList({ onSelectedGenre, selectedGenre }: Props) {
  const { data, isLoading, error } = useGenres();
  const skeletons = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];

  if (error) return;

  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        Genres
      </Heading>
      {isLoading && (
        <List.Root listStyleType="none">
          {skeletons.map((skeleton) => (
            <GenreSkeleton key={skeleton} />
          ))}
        </List.Root>
      )}

      <List.Root listStyleType="none">
        {data
          .sort((a, b) => a.name.localeCompare(b.name)) // Sort by name in ascending order
          .map((genre) => (
            <List.Item key={genre.id} padding="5px">
              <HStack>
                <Image
                  src={getCroppedImageUrl(genre.image_background)}
                  boxSize="32px"
                  borderRadius={8}
                  objectFit="cover"
                />
                <Button
                  fontWeight={
                    genre.id === selectedGenre?.id ? "bold" : "normal"
                  }
                  color={
                    genre.id === selectedGenre?.id ? "yellow.400" : undefined
                  }
                  variant="ghost"
                  fontSize="lg"
                  padding={1}
                  onClick={() => onSelectedGenre(genre)}
                  whiteSpace="normal" // Allow text to wrap
                  textAlign="left" // Align text to the left
                  maxWidth="150px" // Limit the width to ensure wrapping
                >
                  {genre.name}
                </Button>
              </HStack>
            </List.Item>
          ))}
      </List.Root>
    </>
  );
}

export default GenreList;
