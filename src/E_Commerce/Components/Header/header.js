import React from 'react';
import {observer} from 'mobx-react';
import {observable } from 'mobx';
import ProductSort from '../ProductSort';
import {HeaderComponent,DisplayNumberOfProducts,NameSearchComponent} from './styledComponents';

@observer
class Header extends React.Component{
    @observable searchInput;
    constructor(){
        super();
        this.searchInput='';
    }
    onChange=(event)=>{
        this.searchInput=event.target.value;
        this.props.onChangeSearchInput(this.searchInput);
    }
    onKeyDown=(event)=>{
        const {onChangeSearchInput}=this.props;
       if(event.keyCode===13){
           if(this.searchInput.length!==0){
               onChangeSearchInput(this.searchInput);
           }
           else{
               alert("Please enter the search ");
           }
       }
    }
    render(){
        const {productsCount,onChangeSortBy}=this.props;
        const {onKeyDown,onChange}=this;
        return (
            <HeaderComponent>
                <DisplayNumberOfProducts>{productsCount} product(s) found.</DisplayNumberOfProducts>
                <div>
                Search Name:  <NameSearchComponent type='text' defaultValue={this.searchInput} placeholder='search text..!'onChange={onChange} onKeyDown={onKeyDown}/>
                </div>
                <ProductSort onChangeSortBy={onChangeSortBy}/>
            </HeaderComponent>
        );
    }
    
}
export default Header;

