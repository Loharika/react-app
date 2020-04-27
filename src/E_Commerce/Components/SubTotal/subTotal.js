import React,{Component} from 'react';

import {SubTotalDisplay,SubTotalTitle,TotalAmount} from './styledComponents';

class SubTotal extends Component{
    render(){
        const {totalCartAmount}=this.props;
        return (
            <SubTotalDisplay className=''>
                <SubTotalTitle>SUB TOTAL</SubTotalTitle>
                <TotalAmount>{totalCartAmount}</TotalAmount>
            </SubTotalDisplay>
            )
    }
}
export default SubTotal;