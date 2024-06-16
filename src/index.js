import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import AllProductsProvider from "./project/context-api/ContextApi";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
 
      <AllProductsProvider>
        <App />
      </AllProductsProvider>
  </React.StrictMode>
);
