import {observable,action,computed} from 'mobx';
import {bindPromiseWithOnSuccess} from '@ib/mobx-promise';
import {API_INITIAL} from '@ib/api-constants';

import ProductModel from '../Models/ProductModel';

class ProductStore {
    @observable productList;
    @observable getProductListAPIStatus;
    @observable getProductListAPIError;
    @observable productsAPIService;
    @observable sizeFilter;
    @observable sortBy;
    @observable searchInput;
    @observable limit;
    @observable pageNumber;
    @observable limit;
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
        this.sortBy='SELECT'; //ASCENDING, DESCENDING, SELECT
        this.searchInput='';
        this.pageNumber=1;
        this.totalPages=0;
        this.limit=0;
    }
    @action.bound
    getProductList(limit,offset){
        this.limit=limit;
        let productListPromise=this.productsAPIService.getProductsAPI(limit,offset);
        return bindPromiseWithOnSuccess(productListPromise).
        to(this.setGetProductListAPIStatus,this.setProductListResponse).
        catch(this.setGetProductListAPIError);
    }
    @action.bound
    setProductListResponse(productListResponse){
        this.productList=productListResponse.products;
        this.totalPages=Math.ceil(productListResponse.total/this.limit);
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
    @action.bound
    onChangeSearchInput(searchName){
        this.searchInput=searchName;
    }
    @action.bound
    onChangePageNumber(page){
        
        let currentPageNumber=this.pageNumber;
        if(page==='previousPage'){
            currentPageNumber--;
        }
        else{
            currentPageNumber++;
        }
        if(currentPageNumber>0 && currentPageNumber<=this.totalPages){
                this.pageNumber=currentPageNumber;
            }
        let value=this.limit*(this.pageNumber-1);
        this.getProductList(this.limit,value);
    }
    @computed
    get products(){
        let filteredProducts=[];
        if(this.sizeFilter.length!==0){
            this.sizeFilter.forEach(eachSize=>{
            this.productList.forEach(product=>{
            if(product.availableSizes.indexOf(eachSize)!==-1){
                
                let flag=0;
                filteredProducts.forEach(filteredProduct=>{
                    if(filteredProduct.title===product.title){
                        flag++;
                    }
                });
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
        if(this.searchInput.length!==0){
            let array=filteredProducts.filter(product=>(product.title.toLowerCase().includes(this.searchInput.toLowerCase())));
            filteredProducts=array;
        }
        else{
            filteredProducts=filteredProducts;
        }
        switch(this.sortBy){
            case 'SELECT':{
                return filteredProducts;
            }
            case 'ASCENDING':{
                return filteredProducts.slice().sort((a, b)=>{
                    return a.price-b.price;
                });
            }
            case 'DESCENDING':{
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