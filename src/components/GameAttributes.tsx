import { Games } from "@/entities/Games";
import { Box, List, SimpleGrid } from "@chakra-ui/react";
import AttributesBox from "./AttributesBox";
import CriticScore from "./gameCard/CriticScore";
import GameTrailer from "./GameTrailer";

interface Props {
  game: Games | undefined;
}

function GameAttributes({ game }: Props) {
  return (
    <SimpleGrid columns={3} gap="40px" as={"dl"}>
      <AttributesBox title="Platforms">
        <List.Root listStyle={"none"}>
          {game?.parent_platforms.map(({ platform }) => (
            <List.Item key={platform.id}>{platform.name}</List.Item>
          ))}
        </List.Root>
      </AttributesBox>
      <AttributesBox title="Critic score">
        {<CriticScore score={game?.metacritic || 0} />}
      </AttributesBox>
      <AttributesBox title="Genres">
        <List.Root listStyle={"none"}>
          {game?.genres.map((genre) => (
            <List.Item key={genre.id}>{genre.name}</List.Item>
          ))}
        </List.Root>
      </AttributesBox>
      <AttributesBox title="Publishers">
        <List.Root listStyle={"none"}>
          {game?.publishers.map((publisher) => (
            <List.Item key={publisher.id}>{publisher.name}</List.Item>
          ))}
        </List.Root>
      </AttributesBox>
      <Box gridRow="span 2">
        <AttributesBox title="Trailer">
          <GameTrailer game={game} />
        </AttributesBox>
      </Box>
    </SimpleGrid>
  );
}

export default GameAttributes;
