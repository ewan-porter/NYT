import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import { IconContext } from 'react-icons';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <IconContext.Provider
      value={{ color: '#93B4BC', style: { strokeWidth: 1 }, size: '1em' }}
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </IconContext.Provider>
  </React.StrictMode>
);
