import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./pages/root/root";
import Services from "./pages/services/services";
import Contact from "./pages/contact/contact";
import Media from "./pages/media/media";
import About from "./pages/about/about";
import Error from "./pages/error/error";

import "./App.css";

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
