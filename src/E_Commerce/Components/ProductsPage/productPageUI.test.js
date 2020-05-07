/*global expect*/
import React from "react";
import { render, fireEvent } from "@testing-library/react";

import SizeFilter from "../SizeFilter";
import productStore from '../../Stores/ProductStore';
describe("test size filter",()=>{
   it("it should check whether the all the size buttons are there in the document or not",()=>{
       const {queryByText}=render(<SizeFilter onSelectSize={productStore.onSelectSize} sizeFilter={productStore.sizeFilter}/>);
       let sizeButtons=['S','XS','M','L','XL','XXL'];
       sizeButtons.forEach(eachSize=>{
           expect(queryByText(eachSize)).toBeInTheDocument();
       });
   });
   
   
});
