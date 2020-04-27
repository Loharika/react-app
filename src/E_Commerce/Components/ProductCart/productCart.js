import React,{Component} from 'react';
import {observable} from 'mobx';
import {observer} from 'mobx-react';
import styled from '@emotion/styled';
import tw from 'tailwind.macro';
import {FiShoppingCart} from 'react-icons/fi';

import CartList from '../CartList';
import SubTotal from '../SubTotal';
import CheckOutButton from '../CheckOutButton';

import {AddCartOpen,Cart,CartItems,SubTotalWithCheckOutButton,NumberOfCartItems,AddCartClose,CartHideButton,CartTitle,AddCartCloseWithTitle} from './styledComponents.js';

@observer
class ProductCart extends Component{
    @observable shouldDisplayCart;
    constructor(){
        super();
        this.shouldDisplayCart=false;
        
    }
    showCart=()=>{
        this.shouldDisplayCart=true;
    }
    hideCart=()=>{
        this.shouldDisplayCart=false;
    }
    render(){
        
        const {shouldDisplayCart}=this;
        return (
            <CartItems shouldDisplayCart={shouldDisplayCart}>
                <AddCartOpen onClick={this.showCart} shouldDisplayCart={shouldDisplayCart}>
                    <NumberOfCartItems>  &nbsp; {this.props.cartStore.noOfProductsInCart}</NumberOfCartItems>
                    <FiShoppingCart />
                </AddCartOpen>
                <CartHideButton onClick={this.hideCart} shouldDisplayCart={shouldDisplayCart}>X</CartHideButton>
                <Cart shouldDisplayCart={shouldDisplayCart}>
                <AddCartCloseWithTitle>
                    <AddCartClose shouldDisplayCart={shouldDisplayCart}>
                        <NumberOfCartItems>  &nbsp; {this.props.cartStore.noOfProductsInCart}</NumberOfCartItems>
                        <FiShoppingCart />
                    </AddCartClose>
                    <CartTitle>Cart</CartTitle>
                </AddCartCloseWithTitle>
                    <CartList key={this.props.cartStore.cartProductList.length} productsInCart={this.props.cartStore.cartProductList} getProductDetailsById={this.props.cartStore.getProductDetailsById} onRemoveCartItem={this.props.cartStore.onRemoveCartItem}/>
                </Cart>
                <SubTotalWithCheckOutButton shouldDisplayCart={shouldDisplayCart}>
                        <SubTotal key={this.props.cartStore.noOfProductsInCart+1} totalCartAmount={this.props.cartStore.totalCartAmount}/>
                        <CheckOutButton noOfProductsInCart={this.props.cartStore.noOfProductsInCart} clearCart={this.props.cartStore.clearCart}/>
                </SubTotalWithCheckOutButton>
            </CartItems>
            )
    }
    
}
export default ProductCart;