import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from "./pages/Home/Home"
import { GlobalStyle } from './style/GlobalStyle'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Home />
    <GlobalStyle />
  </StrictMode>,
)
