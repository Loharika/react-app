import React from 'react';
import {DropDownSelect}
    from '../../styleComponents/styleComponents.js';
    
class SelectedRegion extends React.Component{
    displayRegions=()=>{
        if(this.props.regionOptions.length>0){
            const regions=this.props.regionOptions.map(eachregion=>{
            return (<option value={eachregion} key={eachregion}>{eachregion}</option>)
                })
            return regions;
        }
        
    }
    
    render(){
        let selecttag=this.props.selectedTheme==='Light Mode'?'continent-names-list-light':'continent-names-list-dark';
        return(
      
      <DropDownSelect onChange={this.props.onChangeSelectedRegion}>
        <option value='all'>All</option>
        {this.displayRegions()}
        </DropDownSelect>
    
            );
    }
}
export default SelectedRegion;