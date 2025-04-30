import axios from "axios";

/*
    Axios client with a custom configuration
*/

//Creates a new axios instance
export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "a3d10e5f73d84fd9a53b2cd681320958", //The key will be included in the query string of every HTTP request
  },
});


