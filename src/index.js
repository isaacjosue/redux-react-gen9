import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import "./assets/styles/index.css";
import App from "./App";
import ErrorBoundary from "./components/ErrorBoundary";
import { reducer } from "./reducers";
import { getLocalStorage } from "./utils/localStorageUtil";

if (!window) {
  require("localstorage-polyfill");
}

const preloadedState = {
  favorites: getLocalStorage("favorites", []),
  currentSection: "Home",
};

const middleware = [];
if (process.env.NODE_ENV === "development") {
  middleware.push(logger);
}

const store = configureStore({
  reducer,
  preloadedState,
  middleware,
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ErrorBoundary>
    <Provider store={store}>
      <App />
    </Provider>
  </ErrorBoundary>
);