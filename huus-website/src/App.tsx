import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./pages/+root/Root";
import Services from "./pages/+root/+services/Services";
import Contact from "./pages/+root/+contact/Contact";
import Media from "./pages/+root/+media/Media";
import About from "./pages/+root/+about/About";

import Error from "./pages/+error/Error";

import "./App.css";
import { UseGeneralState_LambdaInterface } from "./state/react-state-hook/UseGeneralState_LambdaInterface";
import { AppStoreRootState } from "./state/react-redux/store";
import { useEffect } from "react";

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
