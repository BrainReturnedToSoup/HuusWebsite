import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { store } from "./state/store";
import { Provider } from "react-redux";

//initializes the link between the window size and the corresponding
//redux state. This is done with an event listener, and redux toolkit in vanilla TS.
//This state is used for responsive design across the website.
import "./business-logic/windowResizeListener.ts";

//initializes the link between the screen position and corres redux state similarly to above.
import "./business-logic/screenPositionListener.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
