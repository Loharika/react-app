/*global expect*/
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import {Provider} from 'mobx-react';

import productStore from '../../Stores/ProductStore';
import CartStore from '../../Stores/CartStore';
import CartModel from '../../Stores/Models/CartItemModel';
import AuthStore from '../../../Authentication/Stores';
import AuthService from '../../../Authentication/Services';
import ProductCart from '.';
import CartList from '../CartList';
import SubTotal from '../SubTotal';
import CartItem from '../CartItem';
describe("test case to the cart",()=>{
        let cartStore=new CartStore();
        let authService=new AuthService();
        let authStore=new AuthStore(authService);
        it('check the display of cart',()=>{
            const {getByTestId}=render(
            <Provider cartStore={cartStore} productStore={productStore}  authStore={authStore}>
                <ProductCart  />
            </Provider>);
            expect(getByTestId('cart-open-button')).toBeInTheDocument();
            
            fireEvent.click(getByTestId('cart-open-button'));
            expect(getByTestId('cart-close-button')).toBeInTheDocument();
            
            fireEvent.click(getByTestId('cart-close-button'));
            expect(getByTestId('cart-open-button')).toBeInTheDocument();
        });
        it("checking the cartList is empty or not when checkOut has been clicked",()=>{
            const {getByRole,getByTestId}=render(
                <Provider cartStore={cartStore} productStore={productStore}  authStore={authStore}>
                    <ProductCart />
                  </Provider>   
                    );
                    
            expect(getByTestId('cart-open-button')).toBeInTheDocument();
            fireEvent.click(getByTestId('cart-open-button'));
            const checkOut=getByRole('button',{name:'CHECK OUT'},{disabled:true});
            fireEvent.click(checkOut);
            expect(cartStore.cartProductList.length).toBe(0);
            expect(checkOut.disabled).toBe(true);
            if(cartStore.cartProductList.length==0){
                expect(checkOut.disabled).toBe(true);
            }
        });
        it("checking the each product item is an model or not",()=>{
           cartStore.cartProductList.forEach(cartItem=>{
              expect(cartItem).toBe(CartModel);
           });
        });
        it("checking that the items has removed from the cart or not when remove item has clicked",()=>{
            const {getByTestId}=render(
                <Provider cartStore={cartStore} productStore={productStore}  authStore={authStore}>
                    <ProductCart />
                  </Provider>   
                    );
            expect(getByTestId('cart-open-button')).toBeInTheDocument();
            fireEvent.click(getByTestId('cart-open-button'));
            if(cartStore.cartProductList.length===0){
                expect(getByTestId('display-no-items')).toBeInTheDocument();
            }
        });
        it("checking the displaying subtotal amount is correctly from the store or not",()=>{
            const {getByTestId}=render(<SubTotal totalCartAmount={cartStore.totalCartAmount}/>);
            expect(getByTestId('sub-total-amount')).toHaveTextContent(cartStore.totalCartAmount);
        });
        it("checking the correct quantity is displaying or not with respect to cartItemDetails respectively",()=>{
            const {getByTestId}=render(
                <Provider cartStore={cartStore} showCart={()=>{}} hideCart={()=>{}}>
                    <ProductCart />
                  </Provider>   
                    );
             expect(getByTestId('cart-open-button')).toBeInTheDocument();
            fireEvent.click(getByTestId('cart-open-button'));
            
             if(cartStore.cartProductList.length>0){
                 
                cartStore.cartProductList.forEach(cartItem=>{
                    const {getByTestId}=render(<CartItem cartItem={cartItem}/>);

                    expect(getByTestId(`${cartItem.productId} quantity`)).toHaveTextContent('hvjvhvj');
                });
             }
        });
    
});