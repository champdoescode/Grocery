import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Router from './Router.jsx';
import { CartProvider } from './Contexts/CartContext.jsx'; // Adjust the path as per your actual folder structure
import { createRoot } from 'react-dom/client';

const router = createBrowserRouter([
  {
    path: '*',
    Component: Router
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </CartProvider>
  </React.StrictMode>
);
