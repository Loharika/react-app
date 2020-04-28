import React,{Component} from 'react';
import {action} from 'mobx';
import {inject,observer} from 'mobx-react';
import {Redirect } from "react-router-dom";

import SizeFilter from '../SizeFilter';
import Header from '../Header';
import ProductList from '../ProductList';
import ProductCart from '../ProductCart';

import {AvailableSizes_SignOutButton,ProductsDashboard,SignOutButton,
    ProductListDisplay_Header,ProductsPageStyle} from './styledComponents';

@inject('productStore','authStore')
@observer
class ProductsPage extends Component{
    componentDidMount(){
        const {doNetworkCalls}=this;
        doNetworkCalls();
    }
    @action.bound
    getProductsStore(){
        const {productStore}=this.props;
        return productStore;
    }
    @action.bound
    doNetworkCalls(){
        const {getProductsStore}=this;
        getProductsStore().getProductList();
    }

    
    render(){
        
        const {productStore:{onSelectSize,onChangeSortBy,sortedAndFilteredProducts,onClickAddToCart,totalNoOfProductsDisplayed,sizeFilter,
            getProductListAPIStatus,getProductListAPIError}}=this.props;
            
        const {authStore:{authAPIService,userSignOut}}=this.props;
        
        const {doNetworkCalls}=this;
        
        if(authAPIService===undefined){
            return (
            <Redirect to={{pathname:'/ecommerce-store/sign-in/'}}/>
            );
        }
        return (
            <ProductsPageStyle >
                <ProductsDashboard>
                    <AvailableSizes_SignOutButton >
                        <SignOutButton onClick={userSignOut}>Sign Out</SignOutButton>
                        <SizeFilter key={Math.random()} onSelectSize={onSelectSize} sizeFilter={sizeFilter}/>
                    </AvailableSizes_SignOutButton>
                    <ProductListDisplay_Header >
                        <Header productsCount={totalNoOfProductsDisplayed} onChangeSortBy={onChangeSortBy} />
                        <ProductList products={sortedAndFilteredProducts} onClickAddToCart={onClickAddToCart} 
                            doNetworkCalls={doNetworkCalls} getProductListAPIStatus={getProductListAPIStatus} 
                                getProductListAPIError={getProductListAPIError}/>
                    </ProductListDisplay_Header>
                </ProductsDashboard>
                
                <ProductCart/>
            </ProductsPageStyle>
            );
    }
}
export default ProductsPage;








/*
//import Sidebar from "react-sidebar";
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