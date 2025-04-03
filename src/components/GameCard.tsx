import { Games } from "@/services/games-service";
import { Card, Image, Text } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";

interface Props {
  game: Games;
}

function GameCard({ game }: Props) {
  return (
    <Card.Root borderRadius={10} overflow="hidden">
      <Image src={game.background_image} />
      <Card.Body>
        <Card.Title fontSize="1xl">{game.name}</Card.Title>
        <PlatformIconList platform={game.parent_platforms}/>
      </Card.Body>
    </Card.Root>
  );
}

export default GameCard;
