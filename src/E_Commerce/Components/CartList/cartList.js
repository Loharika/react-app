import React,{Component} from 'react';
import {observer} from 'mobx-react';

import CartItem from '../CartItem';
import {DisplayCartList,DisplayAddItemsText} from './styledComponents.js';


@observer
class CartList extends Component{
    renderCartList=()=>{
        const {productsInCart,getProductDetailsById,onRemoveCartItem}=this.props;
        if(productsInCart.length!==0){
            return productsInCart.map(product=>{
            return (<CartItem key={Math.random()} cartItem={product} getProductDetailsById={getProductDetailsById} onRemoveCartItem={onRemoveCartItem}/>);
        });
        }
        
        else{
            return (<DisplayAddItemsText>Add some products in the cart</DisplayAddItemsText>);
        }
    }
    
    render(){
        const {productsInCart}=this.props;
        return (
            <DisplayCartList cartItemsNumber={productsInCart.length}>{this.renderCartList()}</DisplayCartList>
            );
    }
}
export default CartList;