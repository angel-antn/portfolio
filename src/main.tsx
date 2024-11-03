import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ParallaxProvider } from "react-scroll-parallax";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./i18n/i18n.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ParallaxProvider>
      <App />
      <ToastContainer />
    </ParallaxProvider>
  </StrictMode>
);
