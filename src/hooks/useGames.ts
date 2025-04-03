import apiClient from "@/services/api-client";
import { CanceledError } from "axios";
import { useEffect, useState } from "react";
import gamesService, { FetchedGames, Games } from "@/services/games-service";

const useGames = () => {
  const [games, setGames] = useState<Games[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const { request, cancel } = gamesService.getAll<FetchedGames>();

    request
      .then((response) => setGames(response.data.results))
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError(error.message);
      });

    //Cleanup function in case the fetched data is no longer needed
    return () => cancel();
  }, []);

  return { games, error };
};

export default useGames;
