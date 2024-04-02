import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { InitialPage } from "@pages/initialPages";
import { Feeds } from "@pages/feeds";
import { Login } from "@components/layout/login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <InitialPage />,
  },
  {
    path: "/feeds",
    element: <Feeds />,
  },
  {
    path: "/login",
    element: <Login />
  }
])

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App