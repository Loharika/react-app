import React from 'react';
import {observer} from 'mobx-react';
import {observable } from 'mobx';
import SearchByName from './searchField.js';


@observer
class SearchByNameRoute extends React.Component{
    @observable searchInput;
    constructor(){
        super();
        this.searchInput='';
    }
    
    onChange=(event)=>{
        this.searchInput=event.target.value;
        const {onChangeSearchInput}=this.props;
        const {searchInput}=this;
        onChangeSearchInput(searchInput);
        
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
        const {onChange,onKeyDown,searchInput}=this;
        return (
            <SearchByName searchInput={searchInput} onChange={onChange} onKeyDown={onKeyDown}/>
             
            
            );
    }
}
export default SearchByNameRoute;