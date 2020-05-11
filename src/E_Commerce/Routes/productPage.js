import React,{Component} from 'react';
import {action} from 'mobx';
import {inject,observer} from 'mobx-react';

import ProductsPageUI from '../Components/ProductsPage';

@inject('productStore','authStore')
@observer
class ProductsPage extends React.Component{
    componentDidMount(){
        const {doNetworkCalls}=this;
        doNetworkCalls();
    }
    @action.bound
    doNetworkCalls(){
        const {productStore:{getProductList}}=this.props;
        getProductList();
    }
    render(){
        const {doNetworkCalls}=this;
        const {productStore,authStore:{userSignOut}}=this.props;
        return (
            <ProductsPageUI productStore={productStore} key={Math.random()} doNetworkCalls={doNetworkCalls} onClickuserSignOut={userSignOut}/>
            );
    }
}
export default ProductsPage;
