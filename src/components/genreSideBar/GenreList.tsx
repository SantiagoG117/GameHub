import getCroppedImageUrl from "@/services/image-url";
import { Button, Heading, HStack, Image, List } from "@chakra-ui/react";
import GenreSkeleton from "./GenreSkeleton";
import useGenres from "@/hooks/useGenres";
import { Genres } from "@/entities/Genres";
import useGameQueryStore from "@/stateManagement/GameQueryStore";

function GenreList() {
  // Selector: Component will only be dependent on genreId and setSelectedGenre . Any other changes in the Global state won't cause a re-render
  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const setSelectedGenre = useGameQueryStore((s) => s.setSelectedGenre);

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
        {data?.results.map((genre) => (
          <List.Item key={genre.id} padding="5px">
            <HStack>
              <Image
                src={getCroppedImageUrl(genre.image_background)}
                boxSize="32px"
                borderRadius={8}
                objectFit="cover"
              />
              <Button
                onClick={() => setSelectedGenre(genre.id)}
                fontWeight={genre.id === selectedGenreId ? "bold" : "normal"}
                color={genre.id === selectedGenreId ? "yellow.400" : undefined}
                variant="ghost"
                fontSize="lg"
                padding={1}
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
