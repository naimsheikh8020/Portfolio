import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Layout/Home";
import Library from "../Pages/Library";
import Visa from "../Pages/Visa";
import LingoBingo from "../Pages/LingoBingo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
  {
    path: "/library",
    element: <Library></Library>,
  },
  {
    path: "/visa",
    element: <Visa></Visa>,
  },
  {
    path: "/lingobingo",
    element: <LingoBingo></LingoBingo>,
  },
]);

export default router;
