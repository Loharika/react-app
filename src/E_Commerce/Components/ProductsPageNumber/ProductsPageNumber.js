import React from 'react';
import {observer} from 'mobx-react';

import {FiChevronRight} from 'react-icons/fi';
import {FiChevronLeft} from 'react-icons/fi';

import {ProductsPageNumberStyle,PreviousPageButton,NextPageButton,PageNumber} from './styledComponents.js';
@observer
class ProductsPageNumber extends React.Component{
    
    render(){
        const {onChangePageNumber,pageNumber,totalPages}=this.props;
        return (
            <ProductsPageNumberStyle >
                <PreviousPageButton  pageNumber={pageNumber}onClick={()=>onChangePageNumber('previousPage')}>
                <FiChevronLeft />
                </PreviousPageButton>
                <PageNumber >{pageNumber} / {totalPages}</PageNumber>
                <NextPageButton pageNumber={pageNumber} totalPages={totalPages} onClick={()=>onChangePageNumber('nextPage')}>
                
                <FiChevronRight />
                </NextPageButton>
            </ProductsPageNumberStyle>
            
            );
    }
}
export default ProductsPageNumber;