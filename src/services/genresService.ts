//? Http service for genres: Work as a bridge between the API client and the custom hooks for Genres

import ApiClient from "./apiClient";

export interface Genres {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
}

/* 
    The HTTP service is an instance of the API client responsible for making HTTP requests to the /genres endpoint
    and is dedicated to work with a specific type of objects (Genres)
*/

export default new ApiClient<Genres>("/genres");
