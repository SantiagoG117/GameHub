import apiClient from "@/services/api-client";
import { CanceledError } from "axios";
import { useEffect, useState } from "react";
import gamesService, {
  FetchedGames,
  Games,
} from "@/services/games/games-service";

const useGames = () => {
  const [games, setGames] = useState<Games[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    //Call the service to fetch the games from the API
    const { request, cancel } = gamesService.getAll<FetchedGames>();
    request
      .then((response) => {
        setGames(response.data.results);
        setIsLoading(false);
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError(error.message);
        setIsLoading(false);
      });

    //Cleanup function in case the fetched data is no longer needed
    return () => cancel();
  }, []);

  return { games, error, isLoading };
};

export default useGames;
