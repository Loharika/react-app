import React,{Component} from 'react';
import {observer} from 'mobx-react';

import CartItem from '../CartItem';
import {DisplayCartList,DisplayAddItemsText} from './styledComponents.js';


@observer
class CartList extends Component{
    render(){
        const {productsInCart}=this.props;
        const {getProductDetailsById,onRemoveCartItem}=this.props;
        if(productsInCart.length!==0){
            return (<DisplayCartList cartItemsNumber={productsInCart.length}>{productsInCart.map(product=>{
                    return (<CartItem data-testid='display-items' key={Math.random()} cartItem={product} getProductDetailsById={getProductDetailsById} onRemoveCartItem={onRemoveCartItem}/>);
                })
            }</DisplayCartList>);
        }
        return (
            <DisplayCartList cartItemsNumber={productsInCart.length}>
                    <DisplayAddItemsText data-testid='display-no-items'>Add some products in the cart</DisplayAddItemsText>
            </DisplayCartList>
            );
    }
}
export default CartList;