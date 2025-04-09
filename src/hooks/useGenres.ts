import genreService, {
  FetchedGenres,
  Genres,
} from "@/services/genres/genre-service";
import { CanceledError } from "axios";
import { useEffect, useState } from "react";

const useGenres = () => {
  const [genres, setGenres] = useState<Genres[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    //Call the service to fetch the genres from the API
    const { request, cancel } = genreService.getAll<FetchedGenres>();

    request
      .then((response) => {
        setGenres(response.data.results);
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError(error.message);
      });

    //Cleanup function in case the fetched data is no longer needed
    return () => cancel();
  }, []);

  return { genres, error };
};

export default useGenres;
