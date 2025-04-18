import useGenres, { Genres } from "@/hooks/useGenres";
import getCroppedImageUrl from "@/services/image-url";
import { Button, HStack, Image, List } from "@chakra-ui/react";
import GenreSkeleton from "./GenreSkeleton";

interface Props {
  onSelectedGenre: (genre: Genres) => void; // Notifies the parent of this component that a Genre has been selected
  selectedGenre: Genres | null;
}

function GenreList({ onSelectedGenre, selectedGenre }: Props) {
  const { data, isLoading, error } = useGenres();
  const skeletons = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];
  if (error) return;

  return (
    <>
      {isLoading && (
        <List.Root listStyleType="none">
          {skeletons.map((skeleton) => (
            <GenreSkeleton key={skeleton} />
          ))}
        </List.Root>
      )}

      <List.Root listStyleType="none">
        {data.map((genre) => (
          <List.Item key={genre.id} padding="5px">
            <HStack>
              <Image
                src={getCroppedImageUrl(genre.image_background)}
                boxSize="32px"
                borderRadius={8}
              />
              <Button
                fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
                color={
                  genre.id === selectedGenre?.id ? "yellow.400" : undefined
                }
                variant="ghost"
                fontSize={"lg"}
                padding={1}
                /* 
                The button sends the genre to the parent component (App.tsx)
                */
                onClick={() => onSelectedGenre(genre)}
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
