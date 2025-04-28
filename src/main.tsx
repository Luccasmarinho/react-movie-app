import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Home from "./pages/Home/Home";
import { GlobalStyle } from "./style/GlobalStyle";
import AppProvider from "./context/ProviderApp";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppProvider>
      <Home />
      <GlobalStyle />
    </AppProvider>
  </StrictMode>
);
