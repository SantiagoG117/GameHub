import createService from "./http-service";

//Module responsible for making HTTP requests to the /games endpoint

//Interfaces represent the shape of the response object returned by the http request
export interface Games {
  id: number;
  name: string;
  background_image: string;
}

export interface FetchedGames {
  count: number;
  results: Games[];
}

/* 
Takes the createService function imported from http-service to create an instance of 
the HttpService class with an endpoint of /games. Then it exports this instance, which
also contains the required interfaces.
*/
export default createService("/games");
