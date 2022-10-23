import { createBrowserRouter } from "react-router-dom";
import Destination from "../components/Destination/Destination";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import SignUp from "../components/SignUp/SignUp";
import Main from "../Main/Main";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/home',
        element: <Home></Home>
      },
      {
        path: '/destination',
        element: <PrivateRoute><Destination></Destination></PrivateRoute>
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
    ]
  }
])