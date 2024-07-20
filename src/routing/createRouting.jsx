import { createBrowserRouter } from "react-router-dom";
import { Home, About } from "../path";

const router = createBrowserRouter([
    {
      path: "/",
      element: <div>
        <Home />
      </div>
    },
    {
      path: "about",
      element: <div>
        <About />
      </div>
    }
  ])

export default router;