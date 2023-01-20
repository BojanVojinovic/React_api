import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

import Root from "./routes/root";
import Posts from "./routes/comments";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
  },
  {
    path: "posts/:postId",
    element: <Posts />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);