import React from 'react';
import {observer} from 'mobx-react';
import ProductSort from '../ProductSort';
import SearchByNameRoute from '../SearchField';
import {HeaderComponent,DisplayNumberOfProducts} from './styledComponents';

@observer
class Header extends React.Component{
    
    render(){
        const {productsCount,onChangeSortBy,onChangeSearchInput}=this.props;
        return (
            <HeaderComponent >
                <DisplayNumberOfProducts data-testid="productsCount">{productsCount} product(s) found.</DisplayNumberOfProducts>
                <SearchByNameRoute onChangeSearchInput={onChangeSearchInput} />
                <ProductSort onChangeSortBy={onChangeSortBy}/>
            </HeaderComponent>
        );
    }
    
}
export default Header;

