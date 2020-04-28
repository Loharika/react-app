import React from 'react';
import {  Route} from "react-router-dom";

import ProductsPage from '../Components/ProductsPage';

const E_Commerce=[
                <Route exact path="/ecommerce-store/products/" component={ProductsPage} key={Math.random()}/>];

export default E_Commerce;