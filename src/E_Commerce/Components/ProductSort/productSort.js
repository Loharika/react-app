import React,{Component} from 'react';
import {observer} from 'mobx-react';
import {observable} from 'mobx';

import {DropDownComponent,SortByStyleComponent,SelectOption} from './styledComponents.js';

@observer
class ProductSort extends Component{
    constructor(){
        super();
    }
    renderDropDown=()=>{
        return (
            <DropDownComponent onChange={this.onSelectSortBy}>
                <SelectOption hidden="Select" >Select</SelectOption>
                
                <option value='ASCENDING'>Lowest to Highest</option>
                <option value='DESCENDING'>Highest to Lowest</option>
            </DropDownComponent>
            );
    }
    
    onSelectSortBy=(event)=>{
        
        const {onChangeSortBy}=this.props;
        onChangeSortBy(event.target.value);
        
    }
    render(){
        return (
            <SortByStyleComponent>
                Sort price by: &nbsp; 
                {this.renderDropDown()}
            </SortByStyleComponent>
            );
    }
}
export default ProductSort;