import React,{Component} from 'react';
import {observer,inject} from 'mobx-react';

import LoadingWrapperWithFailure from '../../../components/common/LoadingWrapperWithFailure';
import Product from '../Product';
import {DisplayProductsList} from './styledComponents.js';

@inject("cartStore")
@observer
class ProductList extends Component{
    renderProductsList=()=>{
        const {products}=this.props;
        return products.map(product=>{
            return <Product key={Math.random()} product={product} onClickAddToCart={this.onClickAddToCart}/>
        });
    }
    onClickAddToCart=(productDetails)=>{
        this.props.cartStore.onClickAddToCart(productDetails);
    }
    render(){
        
        const {getProductListAPIError,getProductListAPIStatus,doNetworkCalls,productsCount}=this.props;
        return (
            <DisplayProductsList >
            <LoadingWrapperWithFailure key={productsCount} apiStatus={getProductListAPIStatus} apiError={getProductListAPIError} 
                onRetryClick={doNetworkCalls} renderSuccessUI={this.renderProductsList}
            />
            </DisplayProductsList>
            
            );
            
    }
}
export default ProductList;