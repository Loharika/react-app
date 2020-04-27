import React,{Component} from 'react';
import {observer} from 'mobx-react';
import {DropDownComponent} from './styledComponents.js';
@observer
class ProductSort extends Component{
    
    renderDropDown=()=>{
        let productSort=['select','Lowest to Highest','Highest to Lowest'];
        return productSort.map(option=>{
            return (<option value={option} key={Math.random()}>{option}</option>);
        });
        
    }
    
    onSelectSortBy=(event)=>{
        const {onChangeSortBy}=this.props;
        onChangeSortBy(event.target.value);
    }
    render(){
        return (
            <div>
            Sort price by: &nbsp; 
            <DropDownComponent onChange={this.onSelectSortBy}>
                {this.renderDropDown()}
            </DropDownComponent>
            </div>
            );
    }
}
export default ProductSort;