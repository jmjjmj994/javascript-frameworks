import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';
import Cart from './routes/Cart';
import ProductDetail from './routes/ProductDetail';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './layout/Layout';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <App />,
      },
      { path: '/cart', element: <Cart /> },
      { path: 'product/:id', element: <ProductDetail /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
