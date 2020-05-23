import {action} from 'mobx';
import {create} from 'apisauce';
import {networkCallWithApisauce} from '../../utils/APIUtils';
import {apiMethods} from '../Constants';
import endpoints from '../EndPoints';

class ProductService {
    api;
    constructor(){
        this.api=create({
            baseURL:'https://9ba0cd3ggi.execute-api.ap-south-1.amazonaws.com/'
        });
    }
    //@action.bound
    getProductsAPI=(limit,offset)=>{
        return networkCallWithApisauce(
            this.api,
            `ecommerce/products?limit=${limit}&offset=${offset}`,
            {},
            apiMethods.get
            );
    }
}
export default ProductService;