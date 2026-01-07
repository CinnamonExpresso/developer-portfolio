import { Buffer } from 'buffer';

(window as any).Buffer = Buffer;

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx';
import { BrowserRouter } from 'react-router';

import "./styles/index.css";
import "./styles/fontawesome.css";
import "./styles/all.css";
import "./styles/fonts.css";

document.documentElement.classList.add('no-theme-transition')

window.addEventListener('load', () => {
  document.documentElement.classList.remove('no-theme-transition')
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <BrowserRouter>
         <App />
      </BrowserRouter>
  </StrictMode>
)
