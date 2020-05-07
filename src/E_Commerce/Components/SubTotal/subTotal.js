import React,{Component} from 'react';

import {SubTotalDisplay,SubTotalTitle,TotalAmount} from './styledComponents';

class SubTotal extends Component{
    render(){
        const {totalCartAmount}=this.props;
        return (
            <SubTotalDisplay >
                <SubTotalTitle>SUB TOTAL</SubTotalTitle>
                <TotalAmount data-testid='sub-total-amount'>{totalCartAmount}</TotalAmount>
            </SubTotalDisplay>
            );
    }
}
export default SubTotal;