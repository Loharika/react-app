import React,{Component} from 'react';
import {observer} from 'mobx-react';
import {observable} from 'mobx';

import {DropDownComponent,SortByStyleComponent,SelectOption} from './styledComponents.js';

@observer
class ProductSort extends Component{
    @observable displaySelect;
    constructor(){
        super();
        this.displaySelect=true;
    }
    renderDropDown=()=>{
        return (
            <DropDownComponent onChange={this.onSelectSortBy}>
                <SelectOption value='SELECT' displaySelect={this.displaySelect} key={Math.random()}>select</SelectOption>
                <option value='ASCENDING' key={Math.random()}>Lowest to Highest</option>
                <option value='DESCENDING' key={Math.random()}>Highest to Lowest</option>
            </DropDownComponent>
            );
    }
    
    onSelectSortBy=(event)=>{
        this.displaySelect=false;
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
//<SelectOption value='SELECT' displaySelect={this.displaySelect} key={Math.random()}>select</SelectOption>