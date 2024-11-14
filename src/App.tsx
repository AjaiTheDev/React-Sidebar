import { createBrowserRouter, RouterProvider } from "react-router-dom"
import AppLayout from "./Layout"
import routes from "./routes"
import NotFoundPage from "./pages/page404";

function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      errorElement: <NotFoundPage />,
      // specify the routes defined in the
      // routing layer directly
      children: routes,
    },
  ]);

  return (
    <RouterProvider router={router}/>
  )
}

export default App
