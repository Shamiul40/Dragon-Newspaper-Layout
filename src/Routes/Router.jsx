import { createBrowserRouter } from "react-router";
import HomeLayout from "../Components/HomeLayout/HomeLayout";

const router = createBrowserRouter([
  {
    path : "/",
    Component : HomeLayout,
  },
  {
    path : "/*",
    element : <h1>Error page 404</h1>
  }
])

export default router;