/* eslint-disable react-refresh/only-export-components */
import React from "react";
import PathConstants from "./pathConstants";
import { menuItems } from "./menu-items";
import AuthGuard from "../utils/guards/auth-guard";

/**
 * Lazy-loaded components for the routes.
 *
 * @constant
 * @type {React.LazyExoticComponent<React.FC>}
 */
const Home = React.lazy(() => import("../pages/home"));
const About = React.lazy(() => import("../pages/about"));
const ManageHolidays = React.lazy(() => import("../pages/manage-holidays"))

const componentsMap: Record<string, JSX.Element> = {
  [PathConstants.HOME]: <Home />,
  [PathConstants.ABOUT]: <About />,
  [PathConstants.MANAGE_HOLIDAYS]: <ManageHolidays />
};

// Generate routes dynamically
export const routes = [
  ...menuItems.map(({ route, roles }) => ({
    path: route,
    element: <AuthGuard roles={roles}>{componentsMap[route]}</AuthGuard>,
  })),
];

export default routes;
