import React from 'react';
import {observer} from 'mobx-react';

import ProductSort from '../ProductSort';
import {HeaderComponent,DisplayNumberOfProducts} from './styledComponents';

@observer
class Header extends React.Component{

    render(){
        const {productsCount,onChangeSortBy}=this.props;
        return (
            <HeaderComponent>
                <DisplayNumberOfProducts>{productsCount} product(s) found.</DisplayNumberOfProducts>
                <ProductSort onChangeSortBy={onChangeSortBy}/>
            </HeaderComponent>
        );
    }
    
}
export default Header;

