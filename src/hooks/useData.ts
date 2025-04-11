import { CanceledError } from "axios";
import { useEffect, useState } from "react";
import createService from "@/services/http-service";

interface FetchedData<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}

//? Generic hook responsible for fetching the data
const useData = <T>(endpoint: string) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  //Calls the service and sends it the endpoint
  const service = createService(endpoint);

  useEffect(() => {
    setIsLoading(true);
    // Call the service to fetch the data from the API
    const { request, cancel } = service.getAll<FetchedData<T>>();

    request
      .then((response) => {
        setData(response.data.results);
        setIsLoading(false);
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError(error.message);
        setIsLoading(false);
      });

    //Cleanup function in case the fetched data is no logner needed
    return () => cancel();
  }, []);

  return { data, error, isLoading };
};

export default useData;
