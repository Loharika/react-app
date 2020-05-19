import React from 'react';
import {SearchBarContinentList} from '../../styleComponents/styleComponents.js';
import SearchCountry from '../searchCountry/searchCountry.js';
import SelectedRegion from '../selectRegion/selectRegion.js';
class FilterBar extends React.Component{
    displayRegions=()=>{
        if(this.props.regionOptions.length>0){
            const regions=this.props.regionOptions.map(eachregion=>{
            return (<option value={eachregion}>{eachregion}</option>);
                });
            return regions;
        }
        
    }
    render(){
        return(
    <SearchBarContinentList >
      <SearchCountry onChangeSearchText={this.props.onChangeSearchText} />
      <SelectedRegion 
      selectedTheme={this.props.selectedTheme} 
      onChangeSelectedRegion={this.props.onChangeSelectedRegion}
      regionOptions={this.props.regionOptions}/>
    </SearchBarContinentList>
            );
    }
}
export default FilterBar;