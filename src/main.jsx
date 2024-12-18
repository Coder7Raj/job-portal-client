import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import MainRouter from "./Router/MainRouter.jsx";
import { RouterProvider } from "react-router-dom";
import AuthProvider from "./Pages/Auth/AuthContext/AuthProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={MainRouter} />
    </AuthProvider>
  </StrictMode>
);
