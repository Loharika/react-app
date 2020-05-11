/*global expect*/
/*global jest*/
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import {Provider} from 'mobx-react';
import { API_INITIAL,API_SUCCESS, API_FAILED, API_FETCHING } from "@ib/api-constants";


import CartStore from '../../Stores/CartStore';
import SizeFilter from "../SizeFilter";
import ProductList from '../ProductList';
import ProductStore from '../../Stores/ProductStore/productStore.js';
import ProductService from '../../Services/productService.js';
import getProductListResponse from '../../Services/index.fixture.json';
import ProductsPageUI from './productsPageUI.js';

describe("test size filter",()=>{
    const cartStore=new CartStore();
    const productService=new ProductService();
    const productStore=new ProductStore(productService);
   it("it should check whether the all the size buttons are there in the document or not",()=>{
       const {queryByText}=render(<SizeFilter onSelectSize={productStore.onSelectSize} sizeFilter={productStore.sizeFilter}/>);
       let sizeButtons=['S','XS','M','L','XL','XXL'];
       sizeButtons.forEach(eachSize=>{
           expect(queryByText(eachSize)).toBeInTheDocument();
       });
   });
   it("it should check loading view",()=>{
       const {getByLabelText}=render(
            <Provider cartStore={cartStore}>
                    <ProductsPageUI productStore={productStore} />
                </Provider>);
    const mockLoadingPromise = new Promise(function (resolve, reject) {});
    const mockGetProductsAPI = jest.fn();
    mockGetProductsAPI.mockReturnValue(mockLoadingPromise);
    productService.getProductsAPI = mockGetProductsAPI;
    productStore.getProductList();
    expect(productStore.getProductListAPIStatus).toBe(API_FETCHING);
        
    getByLabelText('audio-loading');
        
   });
   it("it should check success UI",async ()=>{
       const {getByRole,getAllByRole,getByDisplayValue}=render(
            <Provider cartStore={cartStore}>
                    <ProductsPageUI productStore={productStore} />
                </Provider>);
       const mockSuccessPromise = new Promise(function(resolve, reject) {
        resolve(getProductListResponse);
      });
      
      const mockGetProductsAPI = jest.fn();
      
      mockGetProductsAPI.mockReturnValue(mockSuccessPromise);
      productService.getProductsAPI = mockGetProductsAPI;
      await productStore.getProductList();

     getByRole('button',{name:'Sign Out'});
     getByRole('button',{name:'XS'});
     getByRole('button',{name:'S'});
     getByRole('button',{name:'M'});
     getByRole('button',{name:'XL'});
     getByRole('button',{name:'XXL'});
     getAllByRole('button',{name:'Add to cart'});
     getByDisplayValue('Select');
   });
   it("it should check the the products are displaying according to the clicked size button",async ()=>{
       const {getByRole,getAllByRole}=render(
            <Provider cartStore={cartStore}>
                    <ProductsPageUI productStore={productStore} />
                </Provider>);
                
       const mockSuccessPromise = new Promise(function(resolve, reject) {
        resolve(getProductListResponse);
      });
      const mockGetProductsAPI = jest.fn();
      mockGetProductsAPI.mockReturnValue(mockSuccessPromise);
      productService.getProductsAPI = mockGetProductsAPI;
      await productStore.getProductList();
        fireEvent.click(getByRole('button',{name:'S'}));
        expect(getAllByRole('button',{name:'Add to cart'}).length).toBe(3);
   });
   it("it should check whether the products are arranging in an selected order or not",async ()=>{
       const {getByDisplayValue}=render(
            <Provider cartStore={cartStore}>
                    <ProductsPageUI productStore={productStore} />
                </Provider>);
                
       const mockSuccessPromise = new Promise(function(resolve, reject) {
        resolve(getProductListResponse);
      });
      const mockGetProductsAPI = jest.fn();
      mockGetProductsAPI.mockReturnValue(mockSuccessPromise);
      productService.getProductsAPI = mockGetProductsAPI;
      await productStore.getProductList();
      productStore.productList=getProductListResponse;
      
      const displayValue=getByDisplayValue('Select');
      fireEvent.click(displayValue,{target:{value:'ASCENDING'}});
      expect(displayValue.value).toBe('ASCENDING');
      productStore.onChangeSortBy('ASCENDING');
      productStore.onSelectSize('S');
      let count=0;
      getProductListResponse.slice().sort((a, b)=>{
        return a.price-b.price}).forEach((product,index)=>{
            if(index<3){
                 (productStore.sortedAndFilteredProducts[index].price===product.price)?"":count++;
            }
           
        });
        expect(count).toBe(0);
   });
});
