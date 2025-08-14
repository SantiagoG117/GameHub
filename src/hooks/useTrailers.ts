import { Trailers } from "@/entities/Trailers";
import ApiClient from "@/services/apiClient";
import { FetchedData } from "@/entities/FetchedData";
import { useQuery } from "@tanstack/react-query";

const useTrailers = (gameId: number | undefined) => {
  return useQuery<FetchedData<Trailers>, Error>({
    queryKey: ["trailers", gameId],
    queryFn: () =>
      new ApiClient<Trailers>(`/games/${gameId}/movies`).getTrailer().request,
  });
};

export default useTrailers;
