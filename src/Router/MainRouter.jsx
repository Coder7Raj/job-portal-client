import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Root from "../Pages/Root";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <h1>error</h1>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        children: [
          {
            path: "login",
            element: <Login></Login>,
          },
          {
            path: "register",
            element: <Register></Register>,
          },
        ],
      },
    ],
  },
]);

export default router;
