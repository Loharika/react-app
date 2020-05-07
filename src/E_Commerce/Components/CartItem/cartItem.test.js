/*global expect*/

import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CartItem from '.';
import CartStore from '../../Stores/CartStore';

describe("check cart items",()=>{
    const cartStore=new CartStore();
    it("check whether the cart item is removed or not",()=>{
        
        cartStore.cartProductList.forEach(cartitem=>{
            const {getByTestId}=render(<CartItem cartItem={cartitem}/>);
            fireEvent.click(getByTestId('remove-cart-item'));
            expect(cartStore.cartProductList.length).toBe(cartStore.cartProductList.length-1);
        });
        
    });
})