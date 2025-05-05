import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { GlobalStyle } from "./style/GlobalStyle";
import ProviderWrapper from "./context/ProviderWrapper";
import RoutesApp from "./Routes/RoutesApp";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ProviderWrapper>
      <RoutesApp />
      <GlobalStyle />
    </ProviderWrapper>
  </StrictMode>
);
