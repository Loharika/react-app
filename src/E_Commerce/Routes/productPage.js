import React,{Component} from 'react';
import {action} from 'mobx';
import {inject,observer} from 'mobx-react';

import ProductsPageUI from '../Components/ProductsPage';

const PRODUCTS_DISPLAY_NUMBER=3;

@inject('productStore','authStore')
@observer
class ProductsPage extends React.Component{
    async componentDidMount(){
        const {doNetworkCalls}=this;
        await doNetworkCalls();
        
    }
    @action.bound
    doNetworkCalls(){
        const {productStore:{getProductList,pageNumber}}=this.props;
        getProductList(PRODUCTS_DISPLAY_NUMBER,PRODUCTS_DISPLAY_NUMBER*(pageNumber-1));
    }
    render(){
        
        const {doNetworkCalls}=this;
        const {productStore,authStore:{userSignOut}}=this.props;
        return (
            <ProductsPageUI productStore={productStore} key={Math.random()}
            doNetworkCalls={doNetworkCalls} onClickuserSignOut={userSignOut} 
             />
            );
    }
}
export default ProductsPage;
