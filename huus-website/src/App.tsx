import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy } from "react";

const Root = lazy(() => import("./pages/+root/Root_Page"));
const Services = lazy(() => import("./pages/+root/+services/Services_Page"));
const Contact = lazy(() => import("./pages/+root/+contact/Contact_Page"));
const Media = lazy(() => import("./pages/+root/+media/Media_Page"));
const About = lazy(() => import("./pages/+root/+about/About_Page"));

const Error = lazy(() => import("./pages/+error/Error_Page"));

import "./App.css";

// init of certain modules
import "./state/listeners/app-window/width-resize/AppWindowWidthResize_Instance";
import "./state/listeners/app-window/position-y-change/AppWindowPositionYChange_Instance";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
  },

  {
    path: "/services",
    element: <Services />,
    errorElement: <Error />,
  },

  {
    path: "/contact",
    element: <Contact />,
    errorElement: <Error />,
  },

  {
    path: "/media",
    element: <Media />,
    errorElement: <Error />,
  },

  {
    path: "/about",
    element: <About />,
    errorElement: <Error />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
