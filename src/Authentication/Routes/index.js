import React from 'react';

import { Route } from "react-router-dom";

import SignInForm from '../Components/SignInForm';
import {endpoints} from '../EndPoints';

const Authentication=[<Route path={endpoints.SIGN_IN_PAGE_PATH} component={SignInForm} key={Math.random()} />];

export default Authentication;