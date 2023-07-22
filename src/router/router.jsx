import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Error from "../pages/Error/Error";
import HomePage from "../layout/HomePage/HomePage";
import Singnup from "../pages/Signup/Singnup";
import Signin from "../pages/Signin/Signin";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: "/signup",
        element: <Singnup />
      },
      {
        path: "/signin",
        element: <Signin />
      }
    ]
  }
])

export default router