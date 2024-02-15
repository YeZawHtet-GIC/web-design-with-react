import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App2 from "./App2";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "@fortawesome/fontawesome-free/css/all.css";
import "aos/dist/aos.css"; // Import the AOS styles
import Features from "./Features/Features";
import Features2 from "./Features/Features2";
import Features3 from "./Features/Features3";
import Hero from "./Hero/Hero";
import Pricing from "./Pricing/Pricing";
import Pricing2 from "./Pricing/Pricing2";
import Feedback from "./Feedback/Feedback";
import AboutUs from "./AboutUs/AboutUs";
import AboutUs2 from "./AboutUs/AboutUs2";
import Contact from "./Contact/Contact";
import AOS from "aos";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
AOS.init();
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <App2 /> },
      { path: "/Home", element: <Hero /> },
      {
        path: "/Features",
        element: (
          <>
            <Features />
            <Features2 />
            <Features3 />
          </>
        ),
      },
      {
        path: "/Pricing",
        element: (
          <>
            <Pricing />
            <Pricing2 />
          </>
        ),
      },
      {
        path: "/AboutUs",
        element: (
          <>
            <AboutUs />
            <AboutUs2 />
          </>
        ),
      },
      { path: "/Contact", element: <Contact /> },
      { path: "/Feedback", element: <Feedback /> },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <RouterProvider router={router}>
    <App2 />
  </RouterProvider>
);
