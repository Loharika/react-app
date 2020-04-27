
import React,{Component} from "react";
import { BrowserRouter as Router, Switch, Route,Redirect } from "react-router-dom";
import {observable,action} from 'mobx';

import SignInForm from '../Components/SignInForm';
import SignOutForm from '../Components/SignOutForm/SignOutForm.js';

const Authentication=[
                <Route path='/sign-out-form' component={SignOutForm} key={Math.random()}/>,
                <Route path="/" component={SignInForm} key={Math.random()} />];

export default Authentication;