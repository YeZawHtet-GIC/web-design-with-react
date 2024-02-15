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
import Hero from "./Hero/Hero";
import Pricing from "./Pricing/Pricing";
import Feedback from "./Feedback/Feedback";
import AboutUs from "./AboutUs/AboutUs";
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
      { path: "Home", element: <Hero /> },
      { path: "Features", element: <Features /> },
      { path: "Pricing", element: <Pricing /> },
      { path: "AboutUs", element: <AboutUs /> },
      { path: "Contact", element: <Contact /> },
      { path: "Feedback", element: <Feedback /> },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router}>
    <App2 />
  </RouterProvider>);
