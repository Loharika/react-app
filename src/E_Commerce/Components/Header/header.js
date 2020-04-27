import React from 'react';
import {observer} from 'mobx-react';
import ProductSort from '../ProductSort';
import {HeaderComponent,DisplayNumberOfProducts} from './styledComponents';
@observer
class Header extends React.Component{

    render(){
        return (
            <HeaderComponent>
        <DisplayNumberOfProducts>{this.props.productsCount} product(s) found</DisplayNumberOfProducts>
        <ProductSort onChangeSortBy={this.props.onChangeSortBy}/>
        </HeaderComponent>
        );
    }
    
}
export default Header;

