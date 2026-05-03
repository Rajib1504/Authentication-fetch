import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import Router from "./router/Router";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "./context/AuthContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <Toaster position="top-right" />
      <RouterProvider router={Router} />
    </AuthProvider>
  </StrictMode>,
);
