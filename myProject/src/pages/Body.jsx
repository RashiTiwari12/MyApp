import React from "react";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./HomePage/Home";
import Login from "./Login/Login";
import ExpertsList from "./ExpertsList/ExpertsList";
import ExpertForm from "./ExpertForm/ExpertForm.jsx";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/experts",
      element: <ExpertsList />,
    },
    {
      path: "/expertform",
      element: <ExpertForm />,
    },
  ]);

  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
};

export default Body;
