import ProductStore from './productStore.js';
import ProductService from '../../Services';

const productService=new ProductService();
const productStore=new ProductStore(productService);

export default productStore;