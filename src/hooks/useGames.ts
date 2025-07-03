//? Custom Hook responsible for definining the endpoint for games and the object returned by the API

import { GameQuery } from "@/App";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import ApiClient, { FetchedData } from "@/services/apiClient";
import { Platforms } from "./usePlatforms";

export interface Games {
  id: number;
  name: string;
  background_image: string;
  // the type of parent_platforms is an array of objects, where each object has a signle property of type Platform
  parent_platforms: { platform: Platforms }[];
  metacritic: number;
  rating_top: number;
}

const useGames = (gameQuery: GameQuery) => {
  const pageSize = 10;
  /* 
    To filter games by genre we have to pass genre as a query string parameter
      - A query string parameter is a key-value pair appended to the URL of an HTTP request to pass additional
      information to the server. 
      - RAWG API specifies the genres and parent_platforms query string parameters as number objects 
      - params is one of the properties of the AxiosRequestConfig object
  */

  const apiClient = new ApiClient<Games>("/games", {
    params: {
      genres: gameQuery.genre?.id,
      parent_platforms: gameQuery.platform?.id,
      ordering: gameQuery.sortOrder?.value,
      search: gameQuery?.searchedText,
    },
  });

  //React query object: Provides auto-retries in case the call to the server fails, automtic refresh and caching
  return useInfiniteQuery<FetchedData<Games>, Error>({
    queryKey: ["games", gameQuery], //Everytime the gameQuery object changes, react query will refresh the games from the backend with the requested string parameters.
    queryFn: ({ pageParam = 1 }) =>
      new ApiClient<Games>("/games", {
        params: {
          genres: gameQuery.genre?.id,
          parent_platforms: gameQuery.platform?.id,
          ordering: gameQuery.sortOrder?.value,
          search: gameQuery?.searchedText,
          _start: (pageParam - 1) * pageSize,
          _limit: pageSize,
          page: pageParam, //Enables data pagination
        },
      }).getAll().request,

    /* 
      getNextPageParam() determines the next page number
        - lastPage[]: Array of 
        - allPagesp[][]: Array of all pages fetched so far
      
      When the Load more button is clicked, React Query will call this function to get the 
      next page number and pass it to the queryFn
    */
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
  });
};

export default useGames;
