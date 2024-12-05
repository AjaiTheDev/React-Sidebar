import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Modal from 'react-modal';

import "react-toastify/dist/ReactToastify.css";
import "react-tooltip/dist/react-tooltip.css";
import './index.css';
import App from './App.tsx';

Modal.setAppElement("#root");
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
