import apiClient from "./api-client";

//?Custom service responsible for making http requests to a client API
class HttpService {
  endPoint: string;

  constructor(endpoint: string) {
    this.endPoint = endpoint; //Initialize the endpoint of the API
  }

  // T is a generic type parameter that works as a placeholder for an Interface or Type
  getAll<T>() {
    const controller = new AbortController(); //Built-in class in browswers that allows to cancel asynchronous operations like get http requests

    const request = apiClient.get<T>(this.endPoint, {
      signal: controller.signal,
    });

    //Return an object with two properties: the promise of the GET request and a clean up function
    return { request, cancel: () => controller.abort() };
  }
}
//Factory function to build an HttpService instance with a endpoint provided as argument
const createService = (endpoint: string) => new HttpService(endpoint);

// Any component that exports this module will receive the createService function by default
export default createService;
