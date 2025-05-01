import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_GENRES } from "@/constants";
import genresService, { Genres } from "@/services/genresService";
import { FetchedData } from "@/services/apiClient";
import genres from "@/data/genres";

//? Custom Hook responsible for managing the cache for Genres
const useGenres = () => {
  const { request } = genresService.getAll();

  //React query object: Provides auto-retries in case the call to the server fails, automtic refresh and caching
  return useQuery<FetchedData<Genres>, Error>({
    queryKey: CACHE_KEY_GENRES,
    queryFn: () => request,
    staleTime: 24 * 60 * 60 * 1000, //Data will be considered fresh for 24 hours
    //Prepopulate the cache with Default data before the fresh data is fetched from the server
    initialData: {
      count: genres.length,
      results: genres,
    },
  });
};

export default useGenres;
