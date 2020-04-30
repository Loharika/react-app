import React,{Component} from 'react';
import {observer,inject} from 'mobx-react';

import LoadingWrapperWithFailure from '../../../common/LoadingWrapperWithFailure';
import Product from '../Product';
import {DisplayProductsList} from './styledComponents.js';

@inject("cartStore")
@observer
class ProductList extends Component{
    renderProductsList=()=>{
        const {products}=this.props;
        let productsList=products.map(product=>{
            return <Product key={Math.random()} product={product} onClickAddToCart={this.onClickAddToCart}/>;
        });
        if(productsList.length>0){
            return (productsList);
        }
        else{
            return('No products Found');
        }
    }
    onClickAddToCart=(productDetails)=>{
        this.props.cartStore.onClickAddToCart(productDetails);
    }
    render(){
        
        const {getProductListAPIError,getProductListAPIStatus,doNetworkCalls}=this.props;
        const {renderProductsList}=this;
            return (
            <DisplayProductsList >
               <LoadingWrapperWithFailure key={Math.random()} apiStatus={getProductListAPIStatus} apiError={getProductListAPIError} 
                        onRetryClick={doNetworkCalls} renderSuccessUI={renderProductsList}
                    />
                
            </DisplayProductsList>
            
            );
        
            
    }
}
export default ProductList;