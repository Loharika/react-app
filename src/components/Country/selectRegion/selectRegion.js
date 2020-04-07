import React from 'react';
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
      
      <select onChange={this.props.onChangeSelectedRegion}>
        <option value='all'>All</option>
        {this.displayRegions()}
        </select>
    
            );
    }
}
export default SelectedRegion;