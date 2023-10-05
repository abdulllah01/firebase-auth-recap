import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Root from "./Root";
import Register from "../Pages/Register/Register";
import NewsDetails from "../Pages/Shared/News/NewsDetails";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/news.json"),
      },
      {
        path: "/news/:id",
        element: (
          <PrivateRoute>
            {" "}
            <NewsDetails />
          </PrivateRoute>
        ),
        loader: () => fetch("./news.json"),
      },
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
