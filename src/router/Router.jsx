import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    default: true,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);
export default Router;
