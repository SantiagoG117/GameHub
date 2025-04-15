//? Custom Hook responsible for definining the endpoint for games and the object returned by the API

import useData from "./useData";
import { Genres } from "./useGenres";

export interface Platforms {
  id: number;
  name: string;
  slug: string;
}

export interface Games {
  id: number;
  name: string;
  background_image: string;
  // the type of parent_platforms is an array of objects, where each object has a signle property of type Platform
  parent_platforms: { platform: Platforms }[];
  metacritic: number;
}

const useGames = (selectedGenre: Genres | null) =>
  /* 
    To filter games by genre we have to pass genre as a query string parameter
      - A query string parameter is a key-value pair appended to the URL of an HTTP request to pass additional
      information to the server. 
      - RAWG API specifies the genres query string as a number object
      - params is one of the properties of the AxiosRequestConfig object
  */
  useData<Games>("/games", { params: {genres: selectedGenre?.id}}, [selectedGenre?.id]);

export default useGames;
