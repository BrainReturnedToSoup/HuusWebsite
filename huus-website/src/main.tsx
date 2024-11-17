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

// initializing the emailjs object globally, since it uses static fields.
// This file executes before all other files. It's safe to keep the public key
// in the repo, because the only calls you can make are based on what is defined
// as templates in your EmailJS account.
import emailjs from "@emailjs/browser";
emailjs.init({ publicKey: "l4CUCpWmX95rBeGgX" });

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
