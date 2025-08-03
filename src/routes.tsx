import GameDetailPage from "@/pages/GameDetailPage";
import HomePage from "@/pages/HomePage";
import LayoutPage from "@/pages/LayoutPage";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/games/:id", element: <GameDetailPage /> },
    ],
  },
]);

export default router;
