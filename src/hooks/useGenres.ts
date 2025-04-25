import genres from "@/data/genres";

//? Custom Hook responsible for definining the endpoint for genres and the object returned by the API
export interface Genres {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
}

// const useGenres = () => useData<Genres>("/genres");
const useGenres = () => ({ data: genres, isLoading: false, error: null });

export default useGenres;
