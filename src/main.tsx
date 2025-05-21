import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { GlobalStyle } from "./style/GlobalStyle";
import ProviderWrapper from "./context/ProviderWrapper";
import RouterWrapper from "./Routes/RouterWrapper";
import ToastAlert from "./components/ToastAlert/ToastAlert";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ProviderWrapper>
      <RouterWrapper />
      <GlobalStyle />
      <ToastAlert />
    </ProviderWrapper>
  </StrictMode>
);
