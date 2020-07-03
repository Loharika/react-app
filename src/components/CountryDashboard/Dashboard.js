
/*global fetch*/
import React from 'react';
import { withRouter } from 'react-router-dom';
import { Header } from './Header'
import { CountriesFilterBar } from './FilterBar'
import { inject, observer } from "mobx-react";

@inject('themeStore')
@observer
class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            countries: [],
            searchText: '',
            selectedRegion: 'All'
        }
    }
    componentDidMount = () => {
        fetch("https://restcountries.eu/rest/v2/all")
            .then(response => response.json())
            .then(json => this.getCountries(json))
    }
    getCountries = (json) => {
        
        this.setState({ countries: json })
    }
    countryDetails = (obj) => {
        console.log(obj)
        this.props.history.push({ pathname: `/countriesDashboardApp/${obj.alpha3Code}`, state: [obj] })
    }
    displayCountries = () => {
        let filteredCountriesList = this.filterCountriesBySearchText()
        let countries = filteredCountriesList.map(eachObj =>
            <div key={eachObj.alpha3Code} onClick={()=>this.countryDetails(eachObj)} className="shadow-xl my-2 flex flex-col justify-center p-4" id={eachObj.name}>
                <img src={eachObj.flag} alt="flag" style={{width:"210px"}}  id={eachObj.name} loading='lazy'/>
                <b id={eachObj.name} className='self-center'>{eachObj.name}</b>
                <br/>
                <p id={eachObj.name}><b id={eachObj.name}>Population:</b>{eachObj.population}</p>
                <p id={eachObj.name}><b id={eachObj.name}>Region:</b>{eachObj.region}</p>
                <p id={eachObj.name}><b id={eachObj.name}>Capital:</b>{eachObj.capital}</p>
            </div>)
        if (countries.length > 0)
            return countries;
        else
            return <p>Result not found</p>
    }
    loading = () => {
        return <p className="font-black text-3xl text-center">Loading...</p>
    }
    onChangeSearchText = (value) => {
        this.setState({ searchText: value })
    }
    onChangeSelectedRegion = (value) => {
        this.setState({ selectedRegion: value })
    }
    filterCountriesBySelectedRegion = () => {
        let dupCountries = this.state.countries.slice(0)
        if (this.state.selectedRegion === "All") {
            return dupCountries
        }
        else {
            dupCountries = dupCountries.filter(eachObj => eachObj.region === this.state.selectedRegion)
            return dupCountries;
        }
    }
    filterCountriesBySearchText = () => {
        let dupFilteredCountries = this.filterCountriesBySelectedRegion();
        let searchedCountries = dupFilteredCountries.filter(eachObj => eachObj.name.toLowerCase().includes(this.state.searchText.toLowerCase()))
        return searchedCountries;
    }
    render() {
        const {themeStore:{selectedTheme,updateCurrentTheme}}=this.props;
        return <div className={selectedTheme==="Light Mode"?'bg-white mx-5 px-5':'bg-gray-800 text-white mx-5 px-5'}> 
            <Header selectedTheme={selectedTheme} onChangeTheme={updateCurrentTheme}/>
            <div>
                <CountriesFilterBar onChangeSearchText={this.onChangeSearchText} 
                onChangeSelectedRegion={this.onChangeSelectedRegion} 
                selectedTheme={selectedTheme}/>
                {(this.state.countries.length>0)?
                <div className="flex justify-between flex-wrap">
                    {this.displayCountries()}
                </div>:this.loading()}
            </div>
        </div>
    }
}
export default withRouter(Dashboard);