import { Card, HStack, Image, Text } from "@chakra-ui/react";
import PlatformIconList from "../PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "@/services/image-url";
import { Games } from "@/hooks/useGames";

interface Props {
  game: Games;
}

function GameCard({ game }: Props) {
  return (
    <Card.Root>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <Card.Body>
        <Card.Title fontSize="md">{game.name}</Card.Title>
        <HStack justifyContent="space-between">
          <PlatformIconList platform={game.parent_platforms} />
          <CriticScore score={game.metacritic} />
        </HStack>
      </Card.Body>
    </Card.Root>
  );
}

export default GameCard;
