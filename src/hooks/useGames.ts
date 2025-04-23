//? Custom Hook responsible for definining the endpoint for games and the object returned by the API

import { GameQuery } from "@/App";
import useData from "./useData";
import { Genres } from "./useGenres";
import { Platforms } from "./usePlatforms";

export interface Games {
  id: number;
  name: string;
  background_image: string;
  // the type of parent_platforms is an array of objects, where each object has a signle property of type Platform
  parent_platforms: { platform: Platforms }[];
  metacritic: number;
}

const useGames = (
  gameQuery: GameQuery
) =>
  /* 
    To filter games by genre we have to pass genre as a query string parameter
      - A query string parameter is a key-value pair appended to the URL of an HTTP request to pass additional
      information to the server. 
      - RAWG API specifies the genres and parent_platforms query string parameters as number objects 
      - params is one of the properties of the AxiosRequestConfig object
  */
  useData<Games>(
    "/games",
    {
      params: {
        genres: gameQuery.genre?.id,
        parent_platforms: gameQuery.platform?.id,
      },
    },
    [gameQuery] // Any change in the gameQuery object React will re-fresh the data with the new filters
  );

export default useGames;
