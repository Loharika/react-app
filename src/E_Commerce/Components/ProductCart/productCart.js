import React,{Component} from 'react';
import {observable} from 'mobx';
import {observer,inject} from 'mobx-react';
import {FiShoppingCart} from 'react-icons/fi';
import {AddCartOpen,Cart,CartItems,SubTotalWithCheckOutButton,NumberOfCartItems,
    AddCartClose,CartHideButton,CartTitle,AddCartCloseWithTitle} from './styledComponents.js';

import CartList from '../CartList';
import SubTotal from '../SubTotal';
import CheckOutButton from '../CheckOutButton';

@inject('cartStore')
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
        
        const {shouldDisplayCart,hideCart,showCart}=this;
        const {cartStore:{noOfProductsInCart,cartProductList,onRemoveCartItem,totalCartAmount,clearCart,getProductDetailsById}}=this.props;
        
        return (
            <CartItems shouldDisplayCart={shouldDisplayCart}>
                <AddCartOpen onClick={showCart} shouldDisplayCart={shouldDisplayCart}>
                    <NumberOfCartItems>  &nbsp; {noOfProductsInCart}</NumberOfCartItems>
                    <FiShoppingCart />
                </AddCartOpen>
                
                <CartHideButton onClick={hideCart} shouldDisplayCart={shouldDisplayCart}>X</CartHideButton>
                
                <Cart shouldDisplayCart={shouldDisplayCart}>
                
                    <AddCartCloseWithTitle>
                    
                        <AddCartClose shouldDisplayCart={shouldDisplayCart}>
                            <NumberOfCartItems>  &nbsp; {noOfProductsInCart}</NumberOfCartItems>
                            <FiShoppingCart />
                        </AddCartClose>
                        
                        <CartTitle>Cart</CartTitle>
                    
                    </AddCartCloseWithTitle>
                    
                    <CartList key={cartProductList.length} productsInCart={cartProductList} getProductDetailsById={getProductDetailsById} onRemoveCartItem={onRemoveCartItem}/>
                    
                    <SubTotalWithCheckOutButton shouldDisplayCart={shouldDisplayCart}>
                            <SubTotal key={noOfProductsInCart+1} totalCartAmount={totalCartAmount}/>
                            <CheckOutButton noOfProductsInCart={noOfProductsInCart} clearCart={clearCart}/>
                    </SubTotalWithCheckOutButton>
                </Cart>
            </CartItems>
            );
    }
    
}
export default ProductCart;