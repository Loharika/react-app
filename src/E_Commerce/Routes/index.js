
import ProductsPage from '../Components/ProductsPage';



import React,{Component} from "react";
import { BrowserRouter as Router, Switch, Route,Redirect,withRouter } from "react-router-dom";
import {observable,action} from 'mobx';

const E_Commerce=[
                <Route exact path="/e-commerce" component={ProductsPage} key={Math.random()}/>];

export default E_Commerce;