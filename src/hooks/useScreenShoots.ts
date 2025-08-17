import { FetchedData } from "@/entities/FetchedData";
import { ScreenShoots } from "@/entities/ScreenShots";
import ApiClient from "@/services/apiClient";
import { useQuery } from "@tanstack/react-query";

const useScreenShoots = (gameId: number | undefined) => {
  return useQuery<FetchedData<ScreenShoots>>({
    queryKey: ["Screenshots", gameId],
    queryFn: () =>
      new ApiClient<ScreenShoots>(`/games/${gameId}/screenshots`).getAll()
        .request,
  });
};

export default useScreenShoots;
