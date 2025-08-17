import { Games } from "@/entities/Games";
import { Box, List, SimpleGrid } from "@chakra-ui/react";
import AttributesBox from "../AttributesBox";
import CriticScore from "../gameCard/CriticScore";

interface Props {
  game: Games | undefined;
}

function GameAttributes({ game }: Props) {
  return (
    <SimpleGrid columns={2} gap="40px" as={"dl"}>
      <AttributesBox title="Platforms">
        <List.Root listStyle={"none"}>
          {game?.parent_platforms.map(({ platform }) => (
            <List.Item key={platform.id} fontSize={["sm", "md", "lg"]}>
              {platform.name}
            </List.Item>
          ))}
        </List.Root>
      </AttributesBox>
      <AttributesBox title="Critic score">
        {<CriticScore score={game?.metacritic || 0} />}
      </AttributesBox>
      <AttributesBox title="Genres">
        <List.Root listStyle={"none"}>
          {game?.genres.map((genre) => (
            <List.Item key={genre.id} fontSize={["sm", "md", "lg"]}>
              {genre.name}
            </List.Item>
          ))}
        </List.Root>
      </AttributesBox>
      <AttributesBox title="Publishers">
        <List.Root listStyle={"none"}>
          {game?.publishers.map((publisher) => (
            <List.Item key={publisher.id} fontSize={["sm", "md", "lg"]}>
              {publisher.name}
            </List.Item>
          ))}
        </List.Root>
      </AttributesBox>
    </SimpleGrid>
  );
}

export default GameAttributes;
