import React from 'react';
import {Redirect,Route} from 'react-router-dom';
import {observer,inject} from 'mobx-react';

const ProtectedRoute = inject('authStore') (observer(({ component: Component,authStore, ...rest }) => {
      
      let authAPIService=authStore.authAPIService;
      
   return(   
<Route
      {...rest}
      render={props =>{
      if(authAPIService !== undefined){
            return <Component />;
      }
      else{
           return <Redirect
      to={{
      pathname: '/ecommerce-store/sign-in/'
      }}
      />;
      }
      
      }} />)}));
export {ProtectedRoute};