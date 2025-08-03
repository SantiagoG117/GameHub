import GameDetailPage from "@/pages/GameDetailPage";
import HomePage from "@/pages/HomePage";
import LayoutPage from "@/pages/LayoutPage";
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutPage />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/games/:id", element: <GameDetailPage /> },
    ],
  },
]);

export default router;
