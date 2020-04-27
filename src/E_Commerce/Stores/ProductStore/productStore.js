import {observable,action,computed} from 'mobx';
import {bindPromiseWithOnSuccess} from '@ib/mobx-promise';
import {API_INITIAL} from '@ib/api-constants';

import ProductModel from '../ProductModel';

class ProductStore {
    @observable productList;
    @observable getProductListAPIStatus;
    @observable getProductListAPIError;
    @observable productsAPIService;
    @observable sizeFilter;
    @observable sortBy;
    productsAPIService
    constructor(productsAPIService){
        this.init(productsAPIService);
    }
    @action.bound
    init(productsAPIService){
        this.productList=[];
        this.getProductListAPIStatus=API_INITIAL;
        this.getProductListAPIError=null;
        this.productsAPIService=productsAPIService;
        this.sizeFilter=[];
        this.sortBy='select'; //ASCENDING, DESCENDING, SELECT
    }
    @action.bound
    getProductList(){
        let productListPromise=this.productsAPIService.getProductsAPI();
        return bindPromiseWithOnSuccess(productListPromise).
        to(this.setGetProductListAPIStatus,this.setProductListResponse).
        catch(this.setGetProductListAPIError);
    }
    @action.bound
    setProductListResponse(productListResponse){
        this.productList=productListResponse;
        //console.log(this.productList);
    }
    @action.bound
    setGetProductListAPIError(apiError){
        this.getProductListAPIError=apiError;
    }
    @action.bound
    setGetProductListAPIStatus(apiStatus){
        this.getProductListAPIStatus=apiStatus;
    }
    @action.bound
    onChangeSortBy(sortingValue){
        this.sortBy=sortingValue;
    }
    @action.bound
    onSelectSize(productSize){
        if(!this.sizeFilter.includes(productSize)){
            this.sizeFilter.push(productSize);
        }
        else{
            this.sizeFilter.splice(this.sizeFilter.indexOf(productSize),1);
        }
    }
    @computed
    get products(){
        let filteredProducts=[];
        //console.log('sizes:'+this.sizeFilter);
        if(this.sizeFilter.length!==0){
            this.sizeFilter.forEach(eachSize=>{
            this.productList.forEach(product=>{
            if(product.availableSizes.indexOf(eachSize)!==-1){
                
                let flag=0;
                filteredProducts.forEach(filteredProduct=>{
                    if(filteredProduct.title===product.title){
                        flag++;
                    }
                })
                if(flag===0){
                    filteredProducts.push(product);
                    }
                }
                
            });
            });
        }
        else{
            filteredProducts=this.productList;
        }
        switch(this.sortBy){
            case 'select':{
                return filteredProducts;
            }
            case 'Lowest to Highest':{
                return filteredProducts.slice().sort((a, b)=>{
                    return a.price-b.price;
                });
            }
            case 'Highest to Lowest':{
                return filteredProducts.slice().sort((a, b)=>{
                    return b.price-a.price;
                });
            }
            }
        }
    @computed
    get sortedAndFilteredProducts(){
        let productsArray=[];
        this.products.forEach(product=>{
            let productModel=new ProductModel(product);
            productsArray.push(productModel);
        });
        return productsArray;
    }
    @computed
    get totalNoOfProductsDisplayed(){
        return this.sortedAndFilteredProducts.length;
    }
}
export default ProductStore;