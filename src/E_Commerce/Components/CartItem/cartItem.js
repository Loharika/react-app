import React,{Component} from 'react';
import {observable} from 'mobx';
import {observer} from 'mobx-react';

import {CartItemDisplay,CartDetailsWithImage,CartItemImage,CartItemDetails,CartItemTitle,CartItemStyle,CartItemQuantity,RemoveButtonWithPrice
   ,RemoveCartItem,CartItemPrice
} from './styledComponents.js';


@observer
class CartItem extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const {getProductDetailsById,cartItem,onRemoveCartItem}=this.props;
        const productDetails=getProductDetailsById(cartItem.productId);
        let cartItemQuantity=`${cartItem.productId} quantity`;
        return (
        <CartItemDisplay >
            <CartDetailsWithImage>
                <CartItemImage src={productDetails.image} />
                <CartItemDetails>
                    <CartItemTitle>{productDetails.title}</CartItemTitle>
                    <CartItemStyle>{productDetails.style}</CartItemStyle>
                    <CartItemQuantity data-testid={cartItemQuantity} >Quantity:{cartItem.quantity}</CartItemQuantity>
                </CartItemDetails>
            </CartDetailsWithImage>
            <RemoveButtonWithPrice>
                <RemoveCartItem  onClick={()=>onRemoveCartItem(cartItem.cartItemId)} data-testid='remove-cart-item'>X</RemoveCartItem>
                <CartItemPrice>{productDetails.currencyFormat} {productDetails.price}</CartItemPrice>
            </RemoveButtonWithPrice>
        </CartItemDisplay>);
    }
}
export default CartItem;