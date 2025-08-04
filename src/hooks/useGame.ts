import ApiClient, { FetchedData } from "@/services/apiClient";
import { useQuery } from "@tanstack/react-query";

export interface GameDetails {
  name: string;
  description_raw: string;
}

const useGame = (gameId: string | undefined) => {
  return useQuery<GameDetails, Error>({
    queryKey: ["game", gameId],
    queryFn: () =>
      new ApiClient<GameDetails>(`/games/${gameId}`).getGame().request,
  });
};

export default useGame;
