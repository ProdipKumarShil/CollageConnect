import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Error from "../pages/Error/Error";
import HomePage from "../layout/HomePage/HomePage";
import Singnup from "../pages/Signup/Singnup";
import Signin from "../pages/Signin/Signin";
import Colleges from "../shared/Colleges/Colleges";
import SingleCollege from "../pages/SingleCollege/SingleCollege";
import Admission from "../pages/Admission/Admission";

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
      },
      {
        path:'/colleges',
        element: <Colleges />
      },
      {
        path: '/colleges/:id',
        loader: ({ params }) => fetch(`https://collegeconnect-server.onrender.com/colleges/${params.id}`),
        element: <SingleCollege />
      },
      {
        path: '/admission',
        element: <Admission />
      }
    ]
  }
])

export default router