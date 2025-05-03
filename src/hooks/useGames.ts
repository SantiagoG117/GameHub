//? Custom Hook responsible for definining the endpoint for games and the object returned by the API

import { GameQuery } from "@/App";
import { useQuery } from "@tanstack/react-query";
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

  //How can I call the server everytime the values of gameQuery change?
  const { request } = apiClient.getAll();

  //React query object: Provides auto-retries in case the call to the server fails, automtic refresh and caching
  return useQuery<FetchedData<Games>, Error>({
    queryKey: ["games", gameQuery], //If any of the values in gamequery changes, react query will refresh the games from the backend with the requested string parameters
    queryFn: () => request,
  });
};

export default useGames;
