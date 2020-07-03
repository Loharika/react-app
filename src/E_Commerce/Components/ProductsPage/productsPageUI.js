import React,{Component} from 'react';
import {observer} from 'mobx-react';

import SizeFilter from '../SizeFilter';
import Header from '../Header';
import ProductList from '../ProductList';
import ProductCart from '../ProductCart';
import {ProductsPageNumber} from '../ProductsPageNumber';

import {AvailableSizes_SignOutButton,ProductsDashboard,SignOutButton,
    ProductListDisplay_Header,ProductsPageStyle} from './styledComponents';

    
@observer
class ProductsPageUI extends Component{
    render(){
    
        const {productStore:{onSelectSize,onChangeSortBy,onChangeSearchInput,sortedAndFilteredProducts,totalNoOfProductsDisplayed,sizeFilter,
            getProductListAPIStatus,getProductListAPIError,onChangePageNumber,pageNumber,totalPages},doNetworkCalls,onClickuserSignOut,}=this.props;
        return (
            <ProductsPageStyle >
            
                <ProductsDashboard>
                    <AvailableSizes_SignOutButton >
                        <SignOutButton onClick={onClickuserSignOut}>Sign Out</SignOutButton>
                        <SizeFilter key={Math.random()} onSelectSize={onSelectSize} sizeFilter={sizeFilter}/>
                    </AvailableSizes_SignOutButton>
                    <ProductListDisplay_Header >
                        <Header productsCount={totalNoOfProductsDisplayed} onChangeSortBy={onChangeSortBy} onChangeSearchInput={onChangeSearchInput} />
                        <ProductList products={sortedAndFilteredProducts}
                            doNetworkCalls={doNetworkCalls} getProductListAPIStatus={getProductListAPIStatus} 
                                getProductListAPIError={getProductListAPIError}/>
                        <ProductsPageNumber onChangePageNumber={onChangePageNumber} pageNumber={pageNumber} totalPages={totalPages} />
                    </ProductListDisplay_Header>
                </ProductsDashboard>
                
                <ProductCart/>
            </ProductsPageStyle>
            );
    }
}
export default ProductsPageUI;