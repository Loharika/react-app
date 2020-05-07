
/*global expect*/
/*global jest*/
import React from "react";
import { render ,fireEvent} from "@testing-library/react";
import SearchByName from './searchField.js';
import ProductStore from '../../Stores/ProductStore/productStore.js';
import ProductService from '../../Services/productService.js';
describe("SearchInout", () => {
  let productService=new ProductService();
    let productStore=new ProductStore(productService);
  it("should render typed search Input", () => {
    const searchInput = "test-user";
    const { getByPlaceholderText} = render(
      <SearchByName searchInput={searchInput} onChange={()=>{}} onKeyDown={()=>{}} />
    );

    const searchInputField = getByPlaceholderText("Search Name");
    fireEvent.change(searchInputField);
      expect(searchInputField.value).toBe(searchInput);
    
  });
});