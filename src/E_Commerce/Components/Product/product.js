import React,{Component} from 'react';
import 'react-toastify/dist/ReactToastify.css';

import { toast } from 'react-toastify';
import { css } from 'glamor';

import Toaster from '../Toaster';
import {ProductTitle,ProductCard,ProductImage,InstallmentsCount,ProductPrice,AddCartToButton,ProductImageWithFreeShippingTag,FreeShippingTag} from './styledComponents';

toast.configure();


class Product extends Component{
    onClickAddToCart=(product)=>{
        const {onClickAddToCart}=this.props;
        const {displayToaster}=this;
        onClickAddToCart(product);
        displayToaster();
    }
    displayToaster=()=> {
      toast(<Toaster />, {
            className: css({
            backgroundColor:'#d69e2e',
            color:'red',
          }),
            position: toast.POSITION.BOTTOM_CENTER,
            autoClose:3000,
            closeButton: false,
            hideProgressBar: true,
            
      });
    }
    render(){
       
        const {product}=this.props;
        const {onClickAddToCart}=this;
        let installmentsCountDisplay=<InstallmentsCount>{product.installmentsCount} x {product.currencyFormat} {((product.price)/product.installmentsCount).toFixed(2)}</InstallmentsCount>;
        return (
            <ProductCard data-testid='success UI' >
                <ProductImageWithFreeShippingTag >
                    <FreeShippingTag >
                      {product.isFreeShipping?'Free shipping':''}
                    </FreeShippingTag>
                    <ProductImage src={product.imageURL} alt={product.title}/>
                </ProductImageWithFreeShippingTag>
                <ProductTitle >{product.title}</ProductTitle>
                <ProductPrice>{product.currencyFormat} {product.price}</ProductPrice>
                {product.installmentsCount>0?installmentsCountDisplay:''}
                <AddCartToButton onClick={()=>onClickAddToCart(product)} >
                    Add to cart
                </AddCartToButton>
            </ProductCard>
            );
    }
}
export default Product;