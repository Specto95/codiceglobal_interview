import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./App.css";
import App from "./App.tsx";

import { BrowserRouter } from "react-router-dom";

import { ProductsProvider } from "./context/ProductsContext.tsx";
import { SessionProvider } from "./context/SessionContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <SessionProvider>
        <ProductsProvider>
          <App />
        </ProductsProvider>
      </SessionProvider>
    </BrowserRouter>
  </StrictMode>
);
