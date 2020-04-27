import React,{Component} from 'react';
import {observer} from 'mobx-react';

import CartItem from '../CartItem';
import {DisplayCartList} from './styledComponents.js';


@observer
class CartList extends Component{
    renderCartList=()=>{
        const {productsInCart}=this.props;
        if(productsInCart.length!==0){
            return productsInCart.map(product=>{
            return (<CartItem key={Math.random()} cartItem={product} getProductDetailsById={this.props.getProductDetailsById} onRemoveCartItem={this.props.onRemoveCartItem}/>);
        });
        }
        
        else{
            return (<div>Add some products in the cart</div>)
        }
    }
    
    render(){
        const {productsInCart}=this.props;
        return (
            <DisplayCartList cartItemsNumber={productsInCart.length}>{this.renderCartList()}</DisplayCartList>
            );
    }
}
export default CartList;