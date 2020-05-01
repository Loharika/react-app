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
    
  });
  it("should test getProductList failure state", async () => {
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
  test("should test getting the sortedAndFilteredProducts",()=>{
    let mockOnSelectSize=jest.fn();
    mockOnSelectSize.mockReturnValue(expect.any(String));
    mockOnSelectSize=productStore.onSelectSize;
    
  });
  
  
});