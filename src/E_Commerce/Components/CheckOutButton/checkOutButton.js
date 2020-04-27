import React,{Component} from 'react';
import {CheckOutButtonStyle} from './styledComponents.js';

class CheckOutButton extends Component{
    render(){
        const {noOfProductsInCart,clearCart}=this.props;
        return (
            <CheckOutButtonStyle disabled={noOfProductsInCart>0?false:true} noOfProductsInCart={noOfProductsInCart} onClick={clearCart} >
              CHECK OUT
            </CheckOutButtonStyle>
            )
    }
}
export default CheckOutButton;