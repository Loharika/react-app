import React from 'react';

import { Route } from "react-router-dom";

import SignInFormRoute from './SignInFormRoute.js';

import {endpoints} from '../EndPoints';

const Authentication=[<Route path={endpoints.SIGN_IN_PAGE_PATH} component={SignInFormRoute} key={Math.random()} />];

export default Authentication;