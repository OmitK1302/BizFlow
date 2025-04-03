import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from 'react-router-dom';

import './index.css';
import App from './App.jsx';
import Layout from './components/Layout.jsx';
import Product from './components/product.jsx'; // Ensure these components exist
import LoginScreen from './Screens/LoginScreen.jsx';
// import ProductDetail from './components/ProductDetail.jsx'; // Ensure these components exist

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path='/' element={<App />} />
      <Route path='/products' element={<Product />} />
      <Route path='/login' element={<LoginScreen />} />
      {/* <Route path='/products/:id' element={<ProductDetail />} /> */}
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
