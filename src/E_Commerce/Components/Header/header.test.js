/*global expect*/
/*global jest*/
import React from 'react';
import {render,fireEvent} from '@testing-library/react';
import Header from '.';
import ProductStore from '../../Stores/ProductStore/productStore.js';
import ProductService from '../../Services/productService.js';
describe("test the props",()=>{
    
    let productService=new ProductService();
    let productStore=new ProductStore(productService);
    
    it('can render with custom initial state', () => {
        
          const {getByTestId}=render(<Header productsCount={productStore.totalNoOfProductsDisplayed} />);
         expect(getByTestId('productsCount')).toHaveTextContent(`${productStore.totalNoOfProductsDisplayed} product(s) found.`);   
    });
    
    
});