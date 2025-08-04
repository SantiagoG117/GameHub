import { Card, HStack, Image, Text } from "@chakra-ui/react";
import PlatformIconList from "../PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "@/services/image-url";
import { Games } from "@/hooks/useGames";
import Emoji from "./Emoji";
import { Link } from "react-router-dom";

interface Props {
  game: Games;
}

function GameCard({ game }: Props) {
  return (
    <>
      <Link to={`/games/${game.slug}`}>
        <Card.Root>
          <Image src={getCroppedImageUrl(game.background_image)} />
          <Card.Body>
            <HStack justifyContent="space-between" marginBottom={3}>
              <PlatformIconList platform={game.parent_platforms} />
              <CriticScore score={game.metacritic} />
            </HStack>
            <Card.Title fontSize="md">
              {game.name}
              <Emoji raiting={game.rating_top} />
            </Card.Title>
          </Card.Body>
        </Card.Root>
      </Link>
    </>
  );
}

export default GameCard;
