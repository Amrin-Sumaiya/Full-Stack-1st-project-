import React from "react";
import User from "./getUser/User";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AddUser from "./getUser/addUser/AddUser";
import UpdateUser from "./getUser/addUser/UpdateUser/UpdateUser";

const router = createBrowserRouter([
  {
    path: "/",
    element: <User />,
  },
  {
    
    path: "/add-user",
    element: <AddUser />,
  },
  {
    
    path: "/update/:id",
    element: <UpdateUser/>,
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
