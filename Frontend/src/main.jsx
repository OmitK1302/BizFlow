import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from 'react-router-dom';

import './index.css';
import App from './App.jsx';
import Layout from './components/Layout.jsx';
import Product from './components/product.jsx'; // Ensure these components exist
import LoginScreen from './Screens/LoginScreen.jsx';
import RegisterScreen from './Screens/RegisterScreen.jsx';
import ProductScreen from './Screens/ProductScreen.jsx';
import ProductDetailScreen from './Screens/ProductDetailScreen.jsx';
import CartScreen from './Screens/CartScreen.jsx';

import { Provider } from 'react-redux';
import store from './store.js';


// import ProductDetail from './components/ProductDetail.jsx'; // Ensure these components exist

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path='/' element={<App />} />
      <Route path='/products' element={<ProductScreen />} />
      <Route path='/login' element={<LoginScreen />} />
      <Route path='/register' element={<RegisterScreen />} />
      <Route path='/product/:id' element={<ProductDetailScreen />} /> {/* Ensure this is the correct component */}
      <Route path='cart' element={<CartScreen />} />
      {/* <Route path='/products/:id' element={<ProductDetail />} /> */}
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
