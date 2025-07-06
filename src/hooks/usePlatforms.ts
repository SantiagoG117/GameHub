//? Custom hook responsible for managing the cache for Platforms

import { CACHE_KEY_PLATFORMS } from "@/constants";
import platforms from "@/data/platforms";
import ApiClient, { FetchedData } from "@/services/apiClient";
import { useQuery } from "@tanstack/react-query";

export interface Platforms {
  id: number;
  name: string;
  slug: string;
}

//? Custom hook responsible for managing the cache memory for platforms and connecting the data returned by the API client with the component.
const usePlatforms = () => {
  //API client responsible for making HTTP requests to the /genres endpoint and is dedicated to work with objects of type Genres
  const apiClient = new ApiClient<Platforms>("/platforms/lists/parents");
  const { request } = apiClient.getAll();

  //React query object: Provides auto-retries in case the call to the server fails, automtic refresh and caching
  //Generic types: <Type of data we are fetching, Type of Error>
  return useQuery<FetchedData<Platforms>, Error>({
    queryKey: CACHE_KEY_PLATFORMS,
    queryFn: () => request,
    staleTime: 24 * 60 * 60 * 1000, //Data will be considered fresh for 24 hours
    //Default data before the fresh data is fetched from the server
    initialData: platforms,
  });
};

export default usePlatforms;
