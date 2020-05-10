import React from 'react';
 import { Route } from 'react-router';
 import Layout from './components/Layout';
 import Home from './components/Home';
 import ManProductsPage from "./components/ListProduct/ManProductsPage"
// import Counter from './components/Counter';
// import FetchData from './components/FetchData';

export default () => (
  <Layout>
    <Route exact path='/' component={Home} />
    <Route path='/man-clothes' component={ManProductsPage} />
  </Layout>
);
