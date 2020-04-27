import React,{Component} from 'react';

import { IconContext } from "react-icons";


import {ProductTitle,ProductCard,ProductImage,InstallmentsCount,ProductPrice,AddCartToButton} from './styledComponents';
class Product extends Component{
    render(){
       
        const {product,onClickAddToCart}=this.props;
        return (
            <ProductCard >
            
            <div className='relative'>
            <div className="absolute top-0 text-white right-0 bg-gray-800">
              {product.isFreeShipping?'Free Shipping':''}
            </div>
            <ProductImage src={product.imageURL} alt={product.title}/>
            </div>
            <ProductTitle >{product.title}</ProductTitle>
            <ProductPrice>{product.currencyFormat} {product.price}</ProductPrice>
            <InstallmentsCount>{product.installmentsCount} x {product.currencyFormat} {((product.price)/product.installmentsCount).toFixed(2)}</InstallmentsCount>
            <AddCartToButton onClick={()=>onClickAddToCart(product)} >
                Add to Cart
            </AddCartToButton>
            </ProductCard>
            );
    }
}
export default Product;