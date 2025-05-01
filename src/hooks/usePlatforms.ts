//? Custom hook responsible for managing the cache for Platforms

import { CACHE_KEY_PLATFORMS } from "@/constants";
import platforms from "@/data/platforms";
import { FetchedData } from "@/services/apiClient";
import platformsService, { Platforms } from "@/services/platformsService";
import { useQuery } from "@tanstack/react-query";

const usePlatforms = () => {
  const { request } = platformsService.getAll();

  //Generic types: <Type of data we are fetching, Type of Error>

  //React query object: Provides auto-retries in case the call to the server fails, automtic refresh and caching
  return useQuery<FetchedData<Platforms>, Error>({
    queryKey: CACHE_KEY_PLATFORMS,
    queryFn: () => request,
    staleTime: 24 * 60 * 60 * 1000, //Data will be considered fresh for 24 hours
    //Default data before the fresh data is fetched from the server
    initialData: {
      count: platforms.length,
      results: platforms,
    },
  });
};

export default usePlatforms;
