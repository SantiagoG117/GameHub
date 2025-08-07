import ApiClient, { FetchedData } from "@/services/apiClient";
import { useQuery } from "@tanstack/react-query";
import { Games } from "../entities/Games";

const useGame = (gameId: string | undefined) => {
  return useQuery<Games, Error>({
    queryKey: ["game", gameId],
    queryFn: () => new ApiClient<Games>(`/games/${gameId}`).getGame().request,
  });
};

export default useGame;
