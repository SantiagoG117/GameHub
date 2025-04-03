import { Games } from "@/services/games-service";
import { Card, Image } from "@chakra-ui/react";

interface Props {
  game: Games;
}

function GameCard({ game }: Props) {
  return (
    <Card.Root borderRadius={10} overflow="hidden">
      <Image src={game.background_image} />
      <Card.Body>
        <Card.Title fontSize="1xl">{game.name}</Card.Title>
      </Card.Body>
    </Card.Root>
  );
}

export default GameCard;
