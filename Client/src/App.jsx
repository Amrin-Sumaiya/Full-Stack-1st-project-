import React from "react";
import User from "./getUser/User";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AddUser from "./getUser/addUser/AddUser";

const router = createBrowserRouter([
  {
    path: "/",
    element: <User />,
  },
  {
    
    path: "/add-user",
    element: <AddUser />,
  },
]);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
