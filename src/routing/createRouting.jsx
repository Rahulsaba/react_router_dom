import { createBrowserRouter } from "react-router-dom";
import { Home, About, Login, } from "@/path";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
      index : true,
    },
    {
      path: "about",
      element: <About />,
    
    }
  ])

export default router;