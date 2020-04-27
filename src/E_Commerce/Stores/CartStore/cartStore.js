import {observable,action,computed} from 'mobx';
import productsStore from '../ProductStore';
import CartItemModel from '../CartItemModel';
class CartStore{
    @observable cartProductList;
    constructor(){
        this.init();
    }
    @action.bound
    init(){
        this.cartProductList=[];
        this.productStore=productsStore;
    }
    @action.bound
    onClickAddToCart(productDetails){
        const {cartProductList}=this;
         let productIsThereInCart=false;
            cartProductList.forEach(cartItem=>{
           
            if(cartItem.productId===productDetails.productId){
                productIsThereInCart=true;
            }
        });
        if(!productIsThereInCart){
            cartProductList.push(new CartItemModel(productDetails));
        }
        else{
            cartProductList[cartProductList.findIndex(x => x.productId ===productDetails.productId)].incrementQuantity();
            }
        }
    @action.bound
    onRemoveCartItem(cartItemId){
           this.cartProductList.forEach((cartItem,index) =>{
            if(cartItem.cartItemId===cartItemId){
                this.cartProductList.splice(index, 1);
            }
        });
    }
    @action.bound
    clearCart(){
        if(this.cartProductList.length>0){
            alert(`Thank You for Shopping with us.\n Your products will be delivered in 3 days to the address mentioned in your profile`);
        }
        this.init();
        
        
    }
    @action.bound
    getProductDetailsById(productId){
        let productObject;
         this.productStore.productList.forEach(product=>{
             if(productId===product.id){
                 productObject=product;
             }
         });
         return productObject;
    }
    @computed
    get totalCartAmount(){
        let totalCartAmount=0;
        this.cartProductList.forEach(cartItem=>{
            totalCartAmount+=this.getProductDetailsById(cartItem.productId).price*cartItem.quantity;
        });
        return totalCartAmount.toFixed(2);
    }
    @computed
    get noOfProductsInCart(){
        let noOfProductsInCart=0;
        this.cartProductList.forEach(cartItem=>{
            noOfProductsInCart+=cartItem.quantity;
        });
        return noOfProductsInCart;
    }
}
export default CartStore;