import useData from "./useData";

//? Custom Hook responsible for definining the endpoint for genres and the object returned by the API
export interface Genres {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
}

const useGenres = () => useData<Genres>("/genres");

export default useGenres;
