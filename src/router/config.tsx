
import type { RouteObject } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/home/page";
import Privacy from "../pages/privacy/page";
import Cookies from "../pages/cookies/page";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/privatumo-politika",
    element: <Privacy />,
  },
  {
    path: "/slapuku-politika",
    element: <Cookies />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
