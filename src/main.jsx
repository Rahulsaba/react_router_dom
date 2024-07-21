import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "@/routing/createRouting";
import "./index.css";
import { Loader } from "@/path";





ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <React.Suspense fallback={
      <div className={'flex_main min-h-screen'}>
        <Loader />
      </div>
    }>
      <RouterProvider router={router} />
    </React.Suspense>
  </React.StrictMode>
);