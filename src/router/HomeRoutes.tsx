import React from "react";

import { Home } from "../components/pages/Home";
import { RoomSearch } from "../components/pages/RoomSearch ";
import { Payment } from "../components/pages/Payment";
import { Page404 } from "../components/pages/Page404";

export const homeRoutes = [
  {
    path: "/",
    exact: true,
    children: <Home />,
  },
  {
    path: "/room_search",
    exact: false,
    children: <RoomSearch />,
  },
  {
    path: "/payment",
    exact: false,
    children: <Payment />,
  },
  {
    path: "*",
    exact: false,
    children: <Page404 />,
  },
];
