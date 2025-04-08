import { Games } from "@/services/games-service";
import { Card, HStack, Image, Text } from "@chakra-ui/react";
import PlatformIconList from "../PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "@/services/image-url";

interface Props {
  game: Games;
}

function GameCard({ game }: Props) {
  return (
    <Card.Root borderRadius={10} overflow="hidden">
      <Image src={getCroppedImageUrl(game.background_image, "600", "400")} />
      <Card.Body>
        <Card.Title fontSize="1xl">{game.name}</Card.Title>
        <HStack justifyContent="space-between">
          <PlatformIconList platform={game.parent_platforms} />
          <CriticScore score={game.metacritic} />
        </HStack>
      </Card.Body>
    </Card.Root>
  );
}

export default GameCard;
