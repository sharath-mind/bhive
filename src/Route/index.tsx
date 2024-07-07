import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "../Pages/LandingPage";
import PageNotFound from "../Pages/PageNotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);

const Route = () => {
  return <RouterProvider router={router} />;
};

export default Route;
