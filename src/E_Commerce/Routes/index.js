import React from 'react';
import {  Route} from "react-router-dom";

import ProductsPage from '../Components/ProductsPage';
import {ProtectedRoute} from '../../common/ProtectedRoute'

import authStore from '../../Authentication/Stores/';
const E_Commerce=[<Route exact path="/ecommerce-store/products/" component={ProductsPage} key={Math.random()}/>];

//const E_Commerce=[<ProtectedRoute exact path='/ecommerce-store/products/' component={ProductsPage} authAPIService={authStore.authAPIService} key={Math.random()}/>]

export default E_Commerce;