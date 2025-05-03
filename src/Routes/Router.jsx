import { createBrowserRouter } from "react-router";
import HomeLayout from "../Components/HomeLayout/HomeLayout";
import Home from "../Pages/Home/Home";
import CategoryNews from "../Pages/CategoryNews/CategoryNews";
import AuthLayout from "../Components/AuthLayout/AuthLayout";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import NewsDetails from "../Components/NewsDetails/NewsDetails";
import PrivateRoute from "../Components/PrivateRoute/PrivateRoute";

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
        hydrateFallbackElement: <p className="text-center">Loading...</p>,
      },
    ],
  },
  {
    path: "/auth",
    Component: AuthLayout,
    children: [
      {
        path: "/auth/login",
        Component: Login,
      },
      {
        path: "/auth/Register",
        Component: Register,
      },
    ],
  },
  {
    path: "/newsDetails/:id",
    element: (
      <PrivateRoute>
        <NewsDetails></NewsDetails>
      </PrivateRoute>
    ),
    loader: () => fetch("/news.json"),
  },
  {
    path: "/*",
    element: <h1>Error page 404</h1>,
  },
]);

export default router;
