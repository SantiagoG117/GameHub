import axios, { AxiosRequestConfig } from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "a3d10e5f73d84fd9a53b2cd681320958", //The key will be included in the query string of every HTTP request
  },
});

export interface FetchedData<T> {
  count: number;
  next: string | null;
  // previous: string | null;
  results: T[]; //The type of results is will be converted to an array of T
}

// Handles sending HTTP request to the Rawg API
class ApiClient<T> {
  endpoint: string;
  requestConfig?: AxiosRequestConfig;

  constructor(endpoint: string, requestConfig?: AxiosRequestConfig) {
    this.endpoint = endpoint;
    this.requestConfig = requestConfig;
  }

  getAll() {
    const controller = new AbortController(); //Built-in class in browsers that allows to cancel asynchronous operations like GET request

    const request = axiosInstance
      .get<FetchedData<T>>(this.endpoint, {
        //Axios request config object: Allows us to pass data in the request object
        signal: controller.signal,
        ...this.requestConfig, //Add additional properties to the AxiosRequestConfig object
      })
      .then((response) => response.data);

    //Return an object with two properties: The GET request promise and a cancel function
    return { request, cancel: () => controller.abort };
  }
}

export default ApiClient;
