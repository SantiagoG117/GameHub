import { Games } from "@/entities/Games";
import { Trailers } from "@/entities/Trailers";
import axios, { AxiosRequestConfig } from "axios";
import { FetchedData } from "../entities/FetchedData";

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "a3d10e5f73d84fd9a53b2cd681320958", //The key will be included in the query string of every HTTP request
  },
});

// Handles sending HTTP request to the Rawg API
class ApiClient<T> {
  endpoint: string;
  requestConfig?: AxiosRequestConfig;

  constructor(endpoint: string, requestConfig?: AxiosRequestConfig) {
    this.endpoint = endpoint;
    this.requestConfig = requestConfig;
  }

  getGame() {
    const controller = new AbortController();
    const request = axiosInstance
      .get<Games>(this.endpoint, {
        signal: controller.signal,
      })
      .then((response) => response.data);

    return { request, cancel: () => controller.abort };
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
