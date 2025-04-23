import { AxiosRequestConfig, CanceledError } from "axios";
import { useEffect, useState } from "react";
import apiClient from "@/services/api-client";

interface FetchedData<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}

//? Generic hook responsible for fetching the data
const useData = <T>(
  endpoint: string,
  requesConfig?: AxiosRequestConfig,
  deps?: any[] //dependencies array for the useEffect hook. It determines when the useEffect callback function should be re-run
) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  //Calls the service and sends it the endpoint
  useEffect(
    () => {
      // Call the service to fetch the data from the API
      const controller = new AbortController(); //Built-in class in browsers that allows to cancel asynchronous operations like get http requests

      setIsLoading(true);

      apiClient
        .get<FetchedData<T>>(endpoint, {
          //Axios request config object: Allows us to pass data in the request body
          signal: controller.signal,
          ...requesConfig, //Add any aditional properties to the AxiosRequestConfig object
        })
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
      return () => controller.abort();
    },
    deps ? [...deps] : []
  ); //<- deps array: When any value in the dep arrya changes, the useEffect hook re-runs. In this case, ff the selectedGenre changes we send a new request to get the games under the selected genre. If no selectedGenre is passed, we send an empty array

  return { data, error, isLoading };
};

export default useData;
