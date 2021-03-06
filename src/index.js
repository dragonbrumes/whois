import "babel-polyfill";
import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

import App from "~/containers/App";
import Domain from "./containers/Domain";
import store from "~/store";

// Ajout de l'élément virtuel dans le DOM du navigateur (mount/render).
// cible.appendChild(quoiajouter)
document.addEventListener("DOMContentLoaded", () => {
  const rootComponent = (
    <Provider store={store}>
      <Domain />
    </Provider>
  );
  const targetNode = document.getElementById("root");
  render(rootComponent, targetNode);
});
