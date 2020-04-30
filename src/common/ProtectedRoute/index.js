import React from 'react';
import {Redirect,Route} from 'react-router-dom';
import {observer} from 'mobx-react';
import authStore from '../../Authentication/Stores/authStore';

//alert(authStore.authAPIService);

import {getAccessToken} from '../../utils/StorageUtils';
 
const ProtectedRoute = observer(({ component: Component, ...rest }) => (
<Route
      {...rest}
      render={props =>
      getAccessToken() ? (
      <Component />
      ) : (
      <Redirect
      to={{
      pathname: '/ecommerce-store/sign-in/'
      }}
      />
      )
      }
      />
      ));
export {ProtectedRoute};