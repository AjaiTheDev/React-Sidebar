/* eslint-disable react-refresh/only-export-components */
import React, { ReactElement } from "react";
import PathConstants from "./pathConstants";

interface IRoutes {
  path: string;
  element: ReactElement;
}

/**
 * Lazy-loaded components for the routes.
 *
 * @constant
 * @type {React.LazyExoticComponent<React.FC>}
 */
const Home  = React.lazy(() => import("../pages/home"));
const About = React.lazy(() => import("../pages/about"));


/**
 * An array of route definitions for the application.
 *
 * @type {IRoutes[]}
 * @property {string} path - The path for the route.
 * @property {JSX.Element} element - The component to render for the route.
 *
 * @example
 * const routes = [
 *   { path: PathConstants.HOME, element: <Home /> },
 *   { path: PathConstants.ABOUT, element: <About /> },
 * ];
 */
const routes: IRoutes[] = [
  { path: PathConstants.HOME, element: <Home /> },
  { path: PathConstants.ABOUT, element: <About /> },
];

export default routes;