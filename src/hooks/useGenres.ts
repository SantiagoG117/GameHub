import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_GENRES } from "@/constants";
import ApiClient, { FetchedData } from "@/services/apiClient";
import genres from "@/data/genres";

export interface Genres {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
}

//? Custom hook responsible for managing the cache memory for genres and connecting the data returned by the API client with the component.
const useGenres = () => {
  //API client responsible for making HTTP requests to the /genres endpoint and is dedicated to work with objects of type Genres
  const apiClient = new ApiClient<Genres>("/genres");
  const { request } = apiClient.getAll();

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
