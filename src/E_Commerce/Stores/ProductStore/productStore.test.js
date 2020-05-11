/*global jest*/
/*global expect*/
/* Mocking js-cookie library */
import Cookie from "js-cookie";

import { API_INITIAL,API_SUCCESS, API_FAILED, API_FETCHING } from "@ib/api-constants";

import ProductService from "../../Services";
import getProductListResponse from '../../Services/index.fixture';

import ProductStore from "./productStore";


let mockSetCookie = jest.fn();
let mockRemoveCookie = jest.fn();

Cookie.set = mockSetCookie;
Cookie.remove = mockRemoveCookie;


describe("ProductStore Tests", () => {
  let productService;
  let productStore;

  beforeEach(() => {
     productService= new ProductService();
    productStore = new ProductStore(productService);
  });
  
  it("should test initialising product store", () => {
    expect(productStore.productList).toEqual(expect.any(Array));
    expect(productStore.getProductListAPIStatus).toBe(API_INITIAL);
    expect(productStore.getProductListAPIError).toBeNull();
    expect(productStore.productsAPIService).toBe(productService);
    expect(productStore.sizeFilter).toEqual(expect.any(Array));
    expect(productStore.sortBy).toMatch(/SELECT/);
    expect(productStore.searchInput).toEqual(expect.any(String));
    expect(productStore.getProductList).toEqual(expect.any(Function));
    expect(productStore.setProductListResponse).toEqual(expect.any(Function));
    expect(productStore.setGetProductListAPIError).toEqual(expect.any(Function));
    expect(productStore.setGetProductListAPIStatus).toEqual(expect.any(Function));
    expect(productStore.onChangeSortBy).toEqual(expect.any(Function));
    expect(productStore.onSelectSize).toEqual(expect.any(Function));
    expect(productStore.onChangeSearchInput).toEqual(expect.any(Function));
    expect(productStore.products).toEqual(expect.anything());
    expect(productStore.sortedAndFilteredProducts).toEqual(expect.anything());
     expect(productStore.totalNoOfProductsDisplayed).toEqual(expect.anything());
  });
  
  
  it("should test getProductsAPI data fetching state", () => {

    const mockLoadingPromise = new Promise(function (resolve, reject) {});
    const mockGetProductsAPI = jest.fn();
    mockGetProductsAPI.mockReturnValue(mockLoadingPromise);
    productService.getProductsAPI = mockGetProductsAPI;
    productStore.getProductList();
    expect(productStore.getProductListAPIStatus).toBe(API_FETCHING);
    
    expect(productStore.getProductListAPIError).toBe(null);
    });
    
    it("should test getProductList success state", async () => {
      const mockSuccessPromise = new Promise(function(resolve, reject) {
        resolve(getProductListResponse);
      });
      const mockGetProductsAPI = jest.fn();
      
      mockGetProductsAPI.mockReturnValue(mockSuccessPromise);
      productService.getProductsAPI = mockGetProductsAPI;
  
      await productStore.getProductList();

      expect(productStore.getProductListAPIStatus).toBe(API_SUCCESS);
      expect(productStore.getProductListAPIError).toBe(null);
    
      expect(productStore.productList).toEqual(getProductListResponse);
      expect(productStore.productList.length).toBe(getProductListResponse.length);
  });
  
  it("it should test getProductList failure state", async () => {
    const mockFailurePromise = new Promise(function(resolve, reject) {
      reject(new Error("error"));
    }).catch(() => {});
    const mockGetProductsAPI = jest.fn();
    mockGetProductsAPI.mockReturnValue(mockFailurePromise);
    productService.getProductsAPI = mockGetProductsAPI;
    
    productStore.getProductList();

    mockFailurePromise.catch(e => {
      expect(productStore.getProductListAPIStatus).toBe(API_FAILED);
    });
  });
  it("it should test the sortedAndFilteredProducts Return Value",()=>{
    let mockSortedAndFilteredProducts=jest.fn();
    mockSortedAndFilteredProducts.mockReturnValue(Array);
    mockSortedAndFilteredProducts=productStore.sortedAndFilteredProducts;
    expect(mockSortedAndFilteredProducts).toEqual(expect.any(Array));
  });
  
  it("it should test the totalNoOfProductsDisplayed Return Value",()=>{
    let mocktotalNoOfProductsDisplayed=jest.fn();
    mocktotalNoOfProductsDisplayed.mockReturnValue(Number);
    mocktotalNoOfProductsDisplayed=productStore.totalNoOfProductsDisplayed;
    expect(mocktotalNoOfProductsDisplayed).toEqual(expect.any(Number));
    expect(mocktotalNoOfProductsDisplayed).toEqual(productStore.sortedAndFilteredProducts.length);
  });
  it("it should check the onChangeSortBy is getting and called and updating the mobx state variable or not",()=>{
    productStore.onChangeSortBy('ASCENDING');
    expect(productStore.sortBy).toBe('ASCENDING');
  });
  it("it should check the onSelectSize funtion is getting and called and updating the mobx state variable or not",()=>{
    productStore.onSelectSize('XS');
    productStore.onSelectSize('XXL');
    expect(productStore.sizeFilter).toEqual(['XS','XXL']);
    productStore.onSelectSize('XXL');
    expect(productStore.sizeFilter).toEqual(['XS']);
  });
  it("it should check the onSelectInputText funtion is getting and called and updating the mobx state variable or not",()=>{
    productStore.onChangeSearchInput('grey');
    expect(productStore.searchInput).toBe('grey');
  });
  it("it should check the onChangeSortBy function in the store",()=>{
    productStore.productList=getProductListResponse;
    productStore.onSelectSize('XS');
    productStore.onSelectSize('XXL');
    productStore.onChangeSortBy('ASCENDING');
    productStore.onChangeSearchInput('grey');
    expect(productStore.sortedAndFilteredProducts.length).toBe(2);
    productStore.onChangeSortBy('DESCENDING');
    expect(productStore.sortedAndFilteredProducts.length).toBe(2);
  });
  it("it should check the function setGetProductListAPIStatus",()=>{
    productStore.setGetProductListAPIStatus('success');
    expect(productStore.getProductListAPIStatus).toBe('success');
  });
  it("it should check the function setGetProductListAPIError",()=>{
    productStore.setGetProductListAPIError('failure');
    expect(productStore.getProductListAPIError).toBe('failure');
  });
  it("it should check the funtion setProductListResponse",()=>{
    productStore.setProductListResponse(getProductListResponse);
    expect(productStore.productList).toEqual(getProductListResponse);
  });
  
});