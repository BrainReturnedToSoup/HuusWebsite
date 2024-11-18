import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { store } from "./state/react-redux-impl/store.ts";
import { Provider } from "react-redux";

//initializes the link between the window size and the corresponding
//redux state. This is done with an event listener, and redux toolkit in vanilla TS.
//This state is used for responsive design across the website.
import "./state/listeners/windowWidthResize.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
