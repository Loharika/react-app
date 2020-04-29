import React from 'react';

import { Route } from "react-router-dom";

import SignInForm from '../Components/SignInForm';

const Authentication=[<Route path="/ecommerce-store/sign-in/" component={SignInForm} key={Math.random()} />];

export default Authentication;