import React from "react";
import { Provider } from "@/components/ui/provider";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

/* 
  ? ReactDOM:
    Takes the component tree and renders it inside a <div> element with the id of root:
      <div id="root"></div>
    ReactDOM is used to render the DOM and update it after changes. createRoot method 
    creates a root instance and calls the render on it to render the component tree.

*/

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  //Component tree to be rendered inside <div id="root"></div> in index.html
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider>
        <App />
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>
);
