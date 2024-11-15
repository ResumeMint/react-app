import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ResumeProvider } from "./contexts/ResumeContext.jsx";
import Write from "./pages/Write.jsx";
import ResumeContents from "./pages/ResumeContents.jsx";
import HowToDownload from "./components/HowToDownload.jsx";
import About from "./components/About.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/create-resume",
    element: <Write />,
  },
  {
    path: "/download",
    element: <ResumeContents />,
  },
  {
    path: "/how-to-download",
    element: <HowToDownload />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ResumeProvider>
      <RouterProvider router={router} />
    </ResumeProvider>
  </StrictMode>
);
