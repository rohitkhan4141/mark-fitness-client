import { createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "../components/Navbar/ProtectedRoute/ProtectedRoute";
import Main from "../layout/Main";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import Services from "../Pages/Services/Services";
import ServicesDetails from "../Pages/ServicesDetails/ServicesDetails";
import SignIn from "../Pages/SignIn/SignIn";
import PrivateRoute from "./PrivateRoute";

export const route = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/services/:id",
        element: <ServicesDetails />,
        loader: ({ params }) =>
          fetch(
            `https://assingment-11-server-rohitkhan4141.vercel.app/services/${params.id}`
          ),
      },
      {
        path: "/signin",
        element: <SignIn />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/protected",
        element: (
          <PrivateRoute>
            <ProtectedRoute />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
