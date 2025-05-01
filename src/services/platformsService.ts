//? Http service for platforms: Works as a bridge between the API client and the custom hooks

import ApiClient from "./apiClient";

export interface Platforms {
  id: number;
  name: string;
  slug: string;
}

/* 
    The HTTP service is an instance of the API client responsible for making HTTP requests to the 
    /platforms/list/parents endpoint and is dedicated to work with objects of type Platforms
*/

export default new ApiClient<Platforms>("/platforms/lists/parents");
