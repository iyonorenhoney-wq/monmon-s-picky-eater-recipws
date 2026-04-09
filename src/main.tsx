
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import { ShoppingProvider } from './context/ShoppingContext.tsx';
import { FavoriteProvider } from './context/FavoriteContext.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <FavoriteProvider>
        <ShoppingProvider>
          <App />
        </ShoppingProvider>
      </FavoriteProvider>
    </BrowserRouter>
  </StrictMode>,
);
