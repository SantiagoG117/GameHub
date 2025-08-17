import useScreenShoots from "@/hooks/useScreenShoots";
import useTrailers from "@/hooks/useTrailers";
import { Box, Image, Skeleton } from "@chakra-ui/react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

interface Props {
  gameId: number | undefined;
}

function GameMedia({ gameId }: Props) {
  const { data: screenShots, isLoading: isLoadingScreenShots } =
    useScreenShoots(gameId);

  const { data: trailers, isLoading: isLoadingTrailer } = useTrailers(gameId);

  // Define the aspect ratio and max width to match Splide
  const aspectRatio = 0.6;
  const maxW = "600px";

  if (isLoadingScreenShots || isLoadingTrailer)
    return (
      <Box width="100%" maxW={maxW} mx="auto">
        <Skeleton
          width="100%"
          height="auto"
          paddingTop={`${aspectRatio * 100}%`} // This keeps the aspect ratio
          borderRadius="md"
        />
      </Box>
    );

  return (
    <Box width="100%">
      <Splide
        options={{
          type: "loop",
          perPage: 1,
          arrows: true,
          pagination: true,
          heightRatio: 0.6,
        }}
        aria-label="Game Screenshots"
      >
        {trailers?.results.length && (
          <SplideSlide>
            <video
              width="100%"
              height="auto"
              controls
              poster={trailers.results[0].preview}
            >
              <source src={trailers.results[0].data.max} />
            </video>
          </SplideSlide>
        )}
        {screenShots?.results.map((shot) => (
          <SplideSlide key={shot.id}>
            <Image
              src={shot.image}
              width="100%"
              height="auto"
              objectFit="cover"
              borderRadius="md"
            />
          </SplideSlide>
        ))}
      </Splide>
    </Box>
  );
}

export default GameMedia;
