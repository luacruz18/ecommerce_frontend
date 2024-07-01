import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";

import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import cartReducer from "./redux/cartSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);

export default store;