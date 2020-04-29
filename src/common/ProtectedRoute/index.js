import React from 'react';
import {Redirect,Route} from 'react-router-dom';

export const ProtectedRoute = ({ component: Component, ...rest }) => {
    console.log(Component);
    render()
    ( <Route {...rest} render={(props) => (
     true
      ? <Component {...props} />
      : <Redirect to={{
          pathname: '/ecommerce-store/sign-in/'
        }} />
  )} />)
 
}
