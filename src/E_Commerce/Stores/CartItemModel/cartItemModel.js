import {observable,action,computed} from 'mobx';

class CartItemModel{
    @observable quantity;
    constructor(props){
        this.cartItemId=Math.random().toString();
        this.productId=props.productId;
        this.quantity=1;
    }
    @action.bound
    incrementQuantity(){
        this.quantity++;
    }
}
export default CartItemModel;