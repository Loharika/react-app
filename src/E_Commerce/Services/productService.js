import {action} from 'mobx';
import {create} from 'apisauce';
import {networkCallWithApisauce} from '../../utils/APIUtils';
import {apiMethods} from '../Constants';
import endpoints from '../EndPoints';

class ProductService {
    api;
    constructor(){
        this.api=create({
            baseURL:'https://5ea1a14db9f5ca00166c1f27.mockapi.io/api/'
        });
    }
    @action.bound
    getProductsAPI(){
        return networkCallWithApisauce(
            this.api,
            endpoints.products,
            {},
            apiMethods.get
            );
    }
}
export default ProductService;