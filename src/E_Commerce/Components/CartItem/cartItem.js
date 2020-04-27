import React,{Component} from 'react';
import {observable} from 'mobx';
import {observer} from 'mobx-react';

import {CartItemDisplay,CartDetailsWithImage,CartItemImage,CartItemDetails,CartItemTitle,CartItemStyle,CartItemQuantity,RemoveButtonWithPrice
   ,RemoveCartItem,CartItemPrice
} from './styledComponents.js';


@observer
class CartItem extends Component{
    @observable quantity;
    constructor(props){
        super(props);
    }
    onRemoveCartItem=(cartItemId)=>{
        const {onRemoveCartItem}=this.props;
        onRemoveCartItem(cartItemId);
    }
    render(){
        const {getProductDetailsById,cartItem}=this.props;
        const productDetails=getProductDetailsById(cartItem.productId);
        return (
        <CartItemDisplay >
        <CartDetailsWithImage>
            <CartItemImage src={productDetails.image} className=''/>
            <CartItemDetails>
            <CartItemTitle>{productDetails.title}</CartItemTitle>
            <CartItemStyle>{productDetails.style}</CartItemStyle>
            <CartItemQuantity>Quantity:{cartItem.quantity}</CartItemQuantity>
            </CartItemDetails>
        </CartDetailsWithImage>
        <RemoveButtonWithPrice className='flex flex-col'>
            <RemoveCartItem type='button' onClick={()=>this.onRemoveCartItem(cartItem.cartItemId)}>X</RemoveCartItem>
            <CartItemPrice>{productDetails.currencyFormat} {productDetails.price}</CartItemPrice>
        </RemoveButtonWithPrice>
        </CartItemDisplay>);
    }
}
export default CartItem;