import React,{Component} from 'react';
import {action,observable} from 'mobx';
import {inject,observer} from 'mobx-react';

//import Sidebar from "react-sidebar";

import { BrowserRouter as Router, Switch, Route,Redirect } from "react-router-dom";

import SizeFilter from '../SizeFilter';
import Header from '../Header';
import ProductList from '../ProductList';
import ProductCart from '../ProductCart';

import {AvailableSizes_SignOutButton,ProductsDashboard,SignOutButton,ProductListDisplay_Header,ProductsPageStyle} from './styledComponents';

@inject('productStore','authStore','cartStore')
@observer
class ProductsPage extends Component{
    @observable isSignOut;
    @observable sidebarOpen;
    constructor(){
        super();
        this.isSignOut=false;
        this.sidebarOpen= true;
    }
    componentDidMount(){
        this.doNetworkCalls();
    }
    @action.bound
    getProductsStore(){
        return this.props.productStore;
    }
    @action.bound
    doNetworkCalls(){
        this.getProductsStore().getProductList();
    }
    @action.bound
    onClickSignOut(){
        this.isSignOut=true;
    }
    
    @action.bound
    onSetSidebarOpen(sideBar) {
    this.sidebarOpen=sideBar;
    }

    
    render(){
        if(this.isSignOut){
            return (
            <Redirect to={{pathname:'/'}}/>
            );
        }
        const {onSelectSize,onChangeSortBy,sortedAndFilteredProducts,onClickAddToCart,totalNoOfProductsDisplayed,sizeFilter,
            getProductListAPIStatus,getProductListAPIError,
        }=this.getProductsStore();
        return (
            <ProductsPageStyle >
                <ProductsDashboard>
                    <AvailableSizes_SignOutButton >
                        <SignOutButton onClick={this.onClickSignOut}>Sign Out</SignOutButton>
                        <SizeFilter key={Math.random()} onSelectSize={onSelectSize} sizeFilter={sizeFilter}/>
                    </AvailableSizes_SignOutButton>
                    <ProductListDisplay_Header >
                        <Header productsCount={totalNoOfProductsDisplayed} onChangeSortBy={onChangeSortBy} />
                        <ProductList products={sortedAndFilteredProducts} productsCount={totalNoOfProductsDisplayed} onClickAddToCart={onClickAddToCart} doNetworkCalls={this.doNetworkCalls} getProductListAPIStatus={getProductListAPIStatus} getProductListAPIError={getProductListAPIError}/>
                    </ProductListDisplay_Header>
                </ProductsDashboard>
                <ProductCart cartStore={this.props.cartStore}/>
            </ProductsPageStyle>
            );
    }
}
export default ProductsPage;

/*
{/*<div className='m-64'>
                <Sidebar
                sidebar={
                    <div><button onClick={()=>this.onSetSidebarOpen(false)}>X</button>
                    
                    </div>
                    }
                    open={this.sidebarOpen}
                    onSetOpen={this.onSetSidebarOpen}
                    styles={{ sidebar: { background: "white",width:"250px"} }}>
                    <button onClick={() => this.onSetSidebarOpen(true)}>
                      Open
                    </button>
        
                 </Sidebar>
                 </div>

this.productList.forEach(product=>{
            let count=0;
            if(this.sizeFilter.length!==0){
                this.sizeFilter.forEach(eachSize=>{
                    if(product.availableSizes.includes(eachSize)){
                        count++;
                    }
                });
                if(count===this.sizeFilter.length){
                    filteredProducts.push(product);
                }
            }
            else{
                filteredProducts=this.productList;
            }
           
        })*/