import createService from "../http-service";

//? Service responsible for calling the /genres endpoint

//? Interface represent the shape of the response object returned by the API
export interface Genres {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
}

export interface FetchedGenres {
  count: number;
  next: string | null;
  previous: string | null;
  results: Genres[];
}

/* 
Calls the createService function imported from http-service to create an instance of the HTTPService class with an endpoint of /genres. 
Then it exports this instance, which also contains the required interfaces.
*/
export default createService("/genres");
