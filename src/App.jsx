import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { InitialPage } from "@pages/initialPages";
import { Feeds } from "@pages/feeds";

const router = createBrowserRouter([
  {
    path: "/",
    element: <InitialPage />,
  },
  {
    path: "/feeds",
    element: <Feeds />,
  }
])

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App