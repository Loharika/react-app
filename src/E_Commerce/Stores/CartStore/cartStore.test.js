/*global expect*/

import getProductListResponse from '../../Services/index.fixture';
import CartStore from '.';
import ProductModel from '../Models/ProductModel';
import productStore from '../ProductStore';

describe("Cart Store Test Cases",()=>{
    const cartStore =new CartStore();
    it("it should check the onClickAddToCart function ",()=>{
      cartStore.onClickAddToCart(new ProductModel(getProductListResponse[0]));
      expect(cartStore.cartProductList.length).toBe(1);
      cartStore.onClickAddToCart(new ProductModel(getProductListResponse[0]));
      cartStore.onClickAddToCart(new ProductModel(getProductListResponse[0]));
      expect(cartStore.noOfProductsInCart).toBe(3);
      expect((cartStore.cartProductList[0]).quantity).toBe(3);
    });
    it("it should check the onRemoveCartItem",()=>{
        cartStore.onClickAddToCart(new ProductModel(getProductListResponse[0]));
        cartStore.onClickAddToCart(new ProductModel(getProductListResponse[2]));
        cartStore.onRemoveCartItem(cartStore.cartProductList[0].cartItemId);
        expect(cartStore.cartProductList.length).toBe(1);
    });
    it("it should check the clearCart",()=>{
       cartStore.onClickAddToCart(new ProductModel(getProductListResponse[0]));
       cartStore.clearCart();
       expect(cartStore.cartProductList.length).toBe(0);
    });
    it("it should check the funtion getProductDetailsById",()=>{
        productStore.productList=getProductListResponse;
        cartStore.onClickAddToCart(new ProductModel(getProductListResponse[0]));
        let returnedProductDetails=cartStore.getProductDetailsById(cartStore.cartProductList[0].productId);
        expect(JSON.parse(JSON.stringify(returnedProductDetails))).toEqual(getProductListResponse[0]);
    });
    it('it should check the totalCartAmount function is giving the correct amount or not ',()=>{
        
        const mockWindowAlert=jest.fn();
        window.alert=mockWindowAlert;
        cartStore.clearCart();
        cartStore.onClickAddToCart(new ProductModel(getProductListResponse[0]));
        cartStore.onClickAddToCart(new ProductModel(getProductListResponse[1]));
        let totalCart=0;
        getProductListResponse.forEach((product,index)=>{
            if(index<2){
                totalCart+=product.price;
            }
            
        });
        expect(cartStore.totalCartAmount).toBe(totalCart.toFixed(2));
    });
})