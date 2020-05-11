import React,{Component} from 'react';
import {observer} from 'mobx-react';
import {observable} from 'mobx';

import {DropDownComponent,SortByStyleComponent,SelectOption} from './styledComponents.js';

@observer
class ProductSort extends Component{
    render(){
        const {onChangeSortBy}=this.props;
        return (
            <SortByStyleComponent>
                Sort price by: &nbsp;
                {<DropDownComponent onChange={()=>onChangeSortBy(event.target.value)}>
                <SelectOption hidden="Select" >Select</SelectOption>
                
                <option value='ASCENDING'>Lowest to Highest</option>
                <option value='DESCENDING'>Highest to Lowest</option>
            </DropDownComponent>}
                
            </SortByStyleComponent>
            );
    }
}
export default ProductSort;