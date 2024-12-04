import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./Layout";
import routes from "./routes";
import NotFoundPage from "./pages/page404";
import PathConstants from "./routes/pathConstants";
import React, { Suspense } from "react";

const Login = React.lazy(() => import("../src/pages/Login"));

function App() {
  const router = createBrowserRouter([
    {
      path: PathConstants.HOME,
      element: <AppLayout />,
      errorElement: <NotFoundPage />,
      // specify the routes defined in the
      // routing layer directly
      children: routes,
    },
    {
      path: PathConstants.LOGIN,
      element: (
        <Suspense fallback={<div>loading login...</div>}>
          <Login />
        </Suspense>
      ),
    },
  ]);

  return (
      <RouterProvider router={router} />
  );
}

export default App;
