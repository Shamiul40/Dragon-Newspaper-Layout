import { createBrowserRouter } from "react-router";
import HomeLayout from "../Components/HomeLayout/HomeLayout";
import Home from "../Pages/Home/Home";
import CategoryNews from "../Pages/CategoryNews/CategoryNews";

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    children: [
      {
        index: true,
        path: "/",
        Component: Home,
      },
      {
        path: "/category/:id",
        Component: CategoryNews,
        loader: () => fetch("/news.json"),
        hydrateFallbackElement : <p className="text-center">Loading...</p>
      },
    ],
  },
  {
    path: "/*",
    element: <h1>Error page 404</h1>,
  },
]);

export default router;
