import React from 'react';
import { render, fireEvent } from "@testing-library/react";

import SearchByNameRoute from './searchFieldRoute.js';
import productStore from '../Stores/ProductStore';

describe("Test cases for SearchFieldRoute",()=>{
    it("it should check the onChangeSearchInput Function",()=>{
        const {getByPlaceholderText}=render(<SearchByNameRoute onChangeSearchInput={()=>{}}/>)
        fireEvent.change(getByPlaceholderText('Search Name'));
        expect(productStore.searchInput).toEqual(expect.any(String));
    });
})