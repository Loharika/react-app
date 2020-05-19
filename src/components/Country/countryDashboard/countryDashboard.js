/*global fetch*/
import React from 'react';
import {observer,inject} from 'mobx-react';

import {WithCountries} from '../../../Hocs/withCountriesData';
import Header from '../header/header.js';
import FilterBar from '../filterBar/filterBar.js';
import Countries from '../countries/countries.js';
import {withRouter} from 'react-router-dom';

import '../countryDashboard/countryDashboard.css';

@inject('themeStore')
@observer
class CountryDashboard extends React.Component{
    constructor(){
        super();
        this.state={
          searchText:'',
          selectedRegion:'all',
          countries:[],
          regionOptions:''
        };
    }

  componentDidMount(){
     this.setState({countries:this.props.countries},this.setRegionOptions(this.state.countries));
  
  }
  setRegionOptions=(countries)=>{
    let allRegions=[];
    countries.map(eachCountry=>eachCountry.region).forEach(region=>{if(allRegions.indexOf(region) === -1){allRegions.push(region)}});
    this.setState({regionOptions:allRegions});
  }
  onChangeSelectedRegion=(event)=>{
    this.setState(
      {selectedRegion:(event.target.value)}
    );
  }
  filterCountriesBySelectedRegion=()=>{
    let filteredCountries;
    if(this.state.selectedRegion==='all'){
      filteredCountries=this.state.countries;
    }
    else{
      filteredCountries=this.state.countries.filter(country=>country.region===this.state.selectedRegion);
    }
    return filteredCountries;
  }
  onChangeSearchText=(event)=>{
    this.setState({
    searchText:(event.target.value).toLowerCase()});
  }
  filterCountriesBySearchText=(filteredCountriesByRegion)=>{
    let filteredCountries;
    filteredCountries=filteredCountriesByRegion.filter(country=>country.name.toLowerCase().includes(this.state.searchText));
    return filteredCountries;
  }
  getCountriesRequired=()=>{
    let filteredCountriesByRegion=this.filterCountriesBySelectedRegion();
    let filteredCountriesByText=this.filterCountriesBySearchText(filteredCountriesByRegion);
    return filteredCountriesByText;
  }
  eachCountryData=(event)=>{
  let {history}=this.props;
  history.push({pathname:`/countryDashboard/:${event.target.id}`});
    }
  render(){
    let styletag1=(this.props.themeStore.selectedTheme==='Light Mode')?'Light':'Dark';
      return(
            <div id='countriesApp' className={styletag1}>
            <Header selectedTheme={this.props.themeStore.selectedTheme} onChangeTheme={this.props.themeStore.updateCurrentTheme}/>
            <FilterBar selectedTheme={this.props.themeStore.selectedTheme} regionOptions={this.state.regionOptions} onChangeSearchText={this.onChangeSearchText} onChangeSelectedRegion={this.onChangeSelectedRegion} />
            {(this.getCountriesRequired().length<=0)?
            <div className='error-message'><span>No such country name is found in the available region!!</span></div>:
            <Countries displayCountries={this.getCountriesRequired()} eachCountryData={this.eachCountryData}/>
            }
            </div>
            );
    }
}
export default withRouter(WithCountries(CountryDashboard));

/*global fetch
import React from 'react';
import {observer,inject} from 'mobx-react';
import Header from '../header/header.js';
import FilterBar from '../filterBar/filterBar.js';
import Countries from '../countries/countries.js';
import {withRouter} from 'react-router-dom';
import loaderIcon from '../assets/loader-icon.svg';
import '../countryDashboard/countryDashboard.css';



import {WithCountries} from '../../../Hocs/withCountriesData/withCountriesData.js';


@inject('themeStore')
@observer
class CountryDashboard extends React.Component{
    constructor(){
        super();
        this.state={
          searchText:'',
          selectedRegion:'all',
          countries:[],
          regionOptions:''
        };
    }
  async componentDidMount(){
    const response=await fetch("https://restcountries.eu/rest/v2/all");
    const json=await response.json();
    this.setState({
      countries:json,
    },this.setRegionOptions(json));
  }
  setRegionOptions=(countries)=>{
    let allRegions=[];
    countries.map(eachCountry=>eachCountry.region).forEach(region=>{if(allRegions.indexOf(region) === -1){allRegions.push(region)}});
    this.setState({regionOptions:allRegions});
  }
  onChangeSelectedRegion=(event)=>{
    this.setState(
      {selectedRegion:(event.target.value)}
    );
  }
  filterCountriesBySelectedRegion=()=>{
    let filteredCountries;
    if(this.state.selectedRegion==='all'){
      filteredCountries=this.state.countries;
    }
    else{
      filteredCountries=this.state.countries.filter(country=>country.region===this.state.selectedRegion);
    }
    return filteredCountries;
  }
  onChangeSearchText=(event)=>{
    this.setState({
    searchText:(event.target.value).toLowerCase()});
  }
  filterCountriesBySearchText=(filteredCountriesByRegion)=>{
    let filteredCountries;
    filteredCountries=filteredCountriesByRegion.filter(country=>country.name.toLowerCase().includes(this.state.searchText));
    return filteredCountries;
  }
  getCountriesRequired=()=>{
    let filteredCountriesByRegion=this.filterCountriesBySelectedRegion();
    let filteredCountriesByText=this.filterCountriesBySearchText(filteredCountriesByRegion);
    return filteredCountriesByText;
  }
  eachCountryData=(event)=>{
  let {history}=this.props;
  history.push({pathname:`/countryDashboard/:${event.target.id}`});
    }
  render(){
    let styletag1=(this.props.themeStore.selectedTheme==='Light Mode')?'Light':'Dark';
    if(this.state.countries.length>0){
      return(
            <div id='countriesApp' className={styletag1}>
            <Header selectedTheme={this.props.themeStore.selectedTheme} onChangeTheme={this.props.themeStore.updateCurrentTheme}/>
            <FilterBar selectedTheme={this.props.themeStore.selectedTheme} regionOptions={this.state.regionOptions} onChangeSearchText={this.onChangeSearchText} onChangeSelectedRegion={this.onChangeSelectedRegion} />
            {(this.getCountriesRequired().length<=0)?
            <div className='error-message'><span>No such country name is found in the available region!!</span></div>:
            <Countries displayCountries={this.getCountriesRequired()} eachCountryData={this.eachCountryData}/>
            }
            </div>
            );
    }
    else{
      return (<div className="loading-icon">
              <img src={loaderIcon} alt="loaderIcon"/>
              </div>);                  
    }
    }
}
export default withRouter(CountryDashboard);
*/