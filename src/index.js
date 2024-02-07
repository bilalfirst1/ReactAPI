import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Index from "./Components/Index";
import Photos from "./Components/Photos/photos";
import Post from "./Components/Post/post";
import User from "./Components/User/user";
import Comments from "./Components/Comments/comments";
import Todos from "./Components/Todos/todos";

let router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/Photos",
    element: <Photos />,
  },
  {
    path: "/Post",
    element: <Post/>,
  },
  {
    path: "/User",
    element: <User/>,
  },
  {
    path: "/Todos",
    element: <Todos/>,
  },
  {
    path: "/Comments",
    element: <Comments/>,
  },
]);

{
  /* <App /> */
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);