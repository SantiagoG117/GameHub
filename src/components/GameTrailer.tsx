import { Games } from "@/entities/Games";
import useTrailers from "@/hooks/useTrailers";
import { Heading } from "@chakra-ui/react";

interface Props {
  game: Games | undefined;
}

function GameTrailer({ game }: Props) {
  const { data, isLoading, error } = useTrailers(game?.id);

  if (isLoading) return <div>Loading trailer...</div>;
  if (!data?.results?.length) return null; // No trailers available

  const firstTrailer = data.results[0];

  return (
    <>
      <Heading color={"gray.600"} fontSize={"md"} paddingBottom={2}>
        Trailer
      </Heading>
      <video width="100%" height="360" controls poster={firstTrailer.preview}>
        <source src={firstTrailer.data.max} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </>
  );
}

export default GameTrailer;
