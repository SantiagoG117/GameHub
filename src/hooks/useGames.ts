//? Custom Hook responsible for definining the endpoint for games and the object returned by the API

import useData from "./useData";

interface Platforms {
  id: number;
  name: string;
  slug: string;
}

interface Games {
  id: number;
  name: string;
  background_image: string;
  // the type of parent_platforms is an array of objects, where each object has a signle property of type Platform
  parent_platforms: { platform: Platforms }[];
  metacritic: number;
}

const useGames = () => useData<Games>("/games");


export default useGames;
