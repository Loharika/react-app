import React from 'react';


import {ProtectedRoute} from '../../common/ProtectedRoute';
import authStore from '../../stores';
import ProductsPage from './productPage';
import endpoints from '../EndPoints';
import {endpoints as signInPageEndPoints} from '../../Authentication/EndPoints';


const E_Commerce=[<ProtectedRoute path={endpoints.PRODUCTS_PAGE_PATH} component={ProductsPage} SIGN_IN_PATH={signInPageEndPoints.SIGN_IN_PAGE_PATH} authAPIService={authStore.authStore.authAPIService} key={Math.random()}/>];

export default E_Commerce;