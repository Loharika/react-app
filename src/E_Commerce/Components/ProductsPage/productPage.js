import React,{Component} from 'react';
import {action} from 'mobx';
import {inject,observer} from 'mobx-react';

import ProductsPageUI from './productsPageUI.js';

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
    
    @action.bound
    onClickuserSignOut(){
        const {authStore:{userSignOut}}=this.props;
        userSignOut();
    }

    
    render(){
        const {doNetworkCalls,onClickuserSignOut}=this;
        const {productStore}=this.props;
        return (
            <ProductsPageUI productStore={productStore} key={Math.random()} doNetworkCalls={doNetworkCalls} onClickuserSignOut={onClickuserSignOut}/>
            );
    }
}
export default ProductsPage;
