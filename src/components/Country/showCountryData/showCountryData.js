/*global fetch*/
import React from 'react';
import {withRouter} from 'react-router';
import CovidGraph from '../covidGraph/covidGraph.js';
import Header from '../header/header.js';
import {ShowDetails,ButtonElement,ImageElement,ButtonElementDiv,TotalCountryData,FlagImage,CountryDetails,CountryDetailsWithoutBorderDetails
    ,CountryName,EachDetailAboutCountry,EachDetail,BorderCountries,CountryDetailsHeading,CountryBorderButtons,CovidGraphTitle
} from '../../styleComponents/styleComponents.js';
import loaderIcon from '../assets/loader-icon.svg';
class ShowCountryData extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data:[],
            code:this.props.match.params.id.slice(1),
        };
    }
    async componentDidMount(){
        const response=await fetch("https://restcountries.eu/rest/v2/all");
        const json=await response.json();
        this.setState({
              data:json,
        });
    }
    goBack=()=>{
        this.props.history.goBack();
        this.setState({ code:this.props.match.params.id.slice(1)});
    }
    displayBorderCountryData=(event)=>{
        this.props.history.push({pathname:`/countryDashboard/:${event.target.id}`});
    }
    createBorderCountries=(countryData)=>{
        let borders=countryData.borders;
        let borderCountryNames=borders.map(border=>{
            const found = this.state.data.find(element => element.alpha3Code===border);
            return found.name;
        });
        const listItems = borders.map((eachBorder,index) =>
        <ButtonElement theme={this.props.selectedTheme}  id={eachBorder} onClick={this.displayBorderCountryData}>{borderCountryNames[index]}</ButtonElement>
        );
        let returnlist=listItems.length!==0?listItems:'None';
        return (
            returnlist
            );
    }
    showSelectedCountryDetails=()=>{
        if(this.state.data.length>0){
            let countryData=this.state.data.find(country => country.alpha3Code===this.state.code);
            let languages=countryData.languages.map(eachLanguage=>eachLanguage.name).toString();
            let currencies=countryData.currencies.map(eachcurrency=>eachcurrency.name).toString();
            return (
                <ShowDetails theme={this.props.selectedTheme}>
                    <Header selectedTheme={this.props.selectedTheme} onChangeTheme={this.props.onChangeTheme} />
                        <ButtonElementDiv>
                            <ButtonElement theme={this.props.selectedTheme} onClick={this.goBack} 
                            >{<i class="fa fa-long-arrow-left"></i>} &nbsp; Back</ButtonElement>
                        </ButtonElementDiv>
                        <TotalCountryData>
                            <FlagImage >
                                <ImageElement src={countryData.flag} alt={countryData.flag}/>
                            </FlagImage>
                            <CountryDetails >
                            <CountryDetailsWithoutBorderDetails>
                                <CountryName >{countryData.name}</CountryName>
                                <EachDetailAboutCountry>
                                    <CountryDetailsWithoutBorderDetails>
                                        <EachDetail ><CountryDetailsHeading >Native Name: </CountryDetailsHeading>  &nbsp; {countryData.nativeName}</EachDetail>
                                        <EachDetail ><CountryDetailsHeading >Population: </CountryDetailsHeading>  &nbsp; {countryData.population}</EachDetail>
                                        <EachDetail ><CountryDetailsHeading >Region: </CountryDetailsHeading> &nbsp; {countryData.region}</EachDetail>
                                        <EachDetail ><CountryDetailsHeading >Sub Region: </CountryDetailsHeading>  &nbsp; {countryData.subregion}</EachDetail>
                                        <EachDetail ><CountryDetailsHeading >Capital: </CountryDetailsHeading>  &nbsp; {countryData.capital}</EachDetail>
                                    </CountryDetailsWithoutBorderDetails>
                                    <CountryDetailsWithoutBorderDetails>
                                        <EachDetail ><CountryDetailsHeading >Top Level Domain: </CountryDetailsHeading>  &nbsp; {countryData.topLevelDomain}</EachDetail>
                                        <EachDetail ><CountryDetailsHeading >Languages: </CountryDetailsHeading>  &nbsp; {languages}</EachDetail>
                                        <EachDetail ><CountryDetailsHeading >Currencies: </CountryDetailsHeading>  &nbsp; {currencies}</EachDetail>
                                    </CountryDetailsWithoutBorderDetails>
                                </EachDetailAboutCountry>
                            </CountryDetailsWithoutBorderDetails>
                            <BorderCountries>
                            <CountryDetailsHeading >Border Countries: </CountryDetailsHeading> </BorderCountries>
                            <CountryBorderButtons >{this.createBorderCountries(countryData)}</CountryBorderButtons>
                            </CountryDetails>
                        </TotalCountryData>
                        <CovidGraphTitle > Covid Graph </CovidGraphTitle>
                        <CovidGraph alpha3Code={countryData.alpha3Code} />
                </ShowDetails>
                );
        }
    }
    render(){
        this.state.code=this.props.match.params.id.slice(1);
        if(this.state.data.length>0){
            return (
            this.showSelectedCountryDetails()
            );
        }
        else{
            return (<div className="loading-icon">
                        <img src={loaderIcon} alt="loaderIcon"/>
                    </div>);
        }
    }
        
}
export default withRouter(ShowCountryData);
/*
version-1 regarding history!!
/*global fetch
import React from 'react';
import {withRouter} from 'react-router';
import CovidGraph from '../covidGraph/covidGraph.js';
import Header from '../header/header.js';
import './showCountryData.css';

import loaderIcon from '../assets/loader-icon.svg';

class ShowCountryData extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data:[],
        languagesNames:'',
        currenciesNames:'',
        countryData:'',
        code:this.props.match.params.id.slice(1),
        };
    }
    async componentDidMount(){
        const response=await fetch("https://restcountries.eu/rest/v2/all");
        const json=await response.json();
        this.setState({
              data:json,
            },this.countryDataToDisplay(this.state.code,json));
    }
    countryDataToDisplay=(code,data)=>{
        const index = data.map(e => e.alpha3Code).indexOf(code);
        let eachCountryDataRequired=data[index];
        this.setState({
            countryData:eachCountryDataRequired,
        });
    }
    goBack=()=>{
        this.props.history.goBack();
         this.setState({ code:this.props.match.params.id.slice(1)}, this.countryDataToDisplay(this.props.match.params.id.slice(1),this.state.data));
    }
    displayLanguages=()=>{
        if(this.state.countryData.languages!==undefined){
            let languages=this.state.countryData.languages.map(eachLanguage=>eachLanguage.name).toString();
        return (
            <div><h4>Languages: </h4>  &nbsp; {languages}</div>
            );
        }
        
    }
    displayCurrencies=()=>{
        if(this.state.countryData.currencies!==undefined){
        let currencies=this.state.countryData.currencies.map(eachcurrency=>eachcurrency.name).toString();
        return (
            <div><h4>Currencies: </h4>  &nbsp; {currencies}</div>
            );
        }
    }
    displayBorderCountryData=(event)=>{
        this.setState({ code:event.target.id}, this.countryDataToDisplay(event.target.id,this.state.data));
        //this.props.history.push({pathname:`/countryDashboard/:${event.target.id}`,state:this.state.data});
    }
    createBorderCountries=()=>{
        if(this.state.countryData.borders!==undefined){
        let borders=this.state.countryData.borders;
        let borderCountryNames=borders.map(border=>{
            const found = this.state.data.find(element => element.alpha3Code===border);
            return found.name;
        });
        const listItems = borders.map((eachBorder,index) =>
        <button type='button' id={eachBorder} onClick={this.displayBorderCountryData}>{borderCountryNames[index]}</button>
        );
        let returnlist=listItems.length!==0?listItems:'None';
        return (
            returnlist
            );
        }
    }
    render(){
        let selector1=(this.props.selectedTheme==='Light Mode')?'country-details-light':'country-details-dark';
        let selector2=(this.props.selectedTheme==='Light Mode')?'go-back-button-light':'go-back-button-dark';
        let selector3=(this.props.selectedTheme==='Light Mode')?'border-country-light':'border-country-dark';
        if(this.state.data.length>0){
            return (
        <div className={selector1}>
            <Header selectedTheme={this.props.selectedTheme} onChangeTheme={this.props.onChangeTheme} />
            <div className='p-3 self-start'><button type='button' onClick={this.goBack} 
             className={selector2}>{<i class="fa fa-long-arrow-left"></i>} &nbsp; Back</button></div>
        <div className='w-full flex ml-5 justify-around'>
            <div className='w-1/3 flex justify-center items-center flex-col'>
                <img src={this.state.countryData.flag} className='image'  alt={this.state.countryData.flag}/>
            </div>
            <div className='w-4/5 flex flex-col'>
                <h2>{this.state.countryData.name}</h2>
                <div className="flex">
                    <div className="first-column-data" className='flex flex-col'>
                        <div><h4>Native Name: </h4>  &nbsp; {this.state.countryData.nativeName}</div>
                        <div><h4>Population: </h4>  &nbsp; {this.state.countryData.population}</div>
                        <div><h4>Region: </h4> &nbsp; {this.state.countryData.region}</div>
                        <div><h4>Sub Region: </h4>  &nbsp; {this.state.countryData.subregion}</div>
                        <div><h4>Capital: </h4>  &nbsp; {this.state.countryData.capital}</div>
                    </div>
                    <div className="second-column-data" className='flex flex-col'>
                        <div><h4>Top Level Domain: </h4>  &nbsp; {this.state.countryData.topLevelDomain}</div>
                        {this.displayLanguages()}
                        {this.displayCurrencies()}
                    </div>
                </div>
                <div 
                ><h4>Border Countries: </h4> </div>
                <div className={selector3}>{this.createBorderCountries()}</div>
            </div>
        </div>
        <div className="covid-graph"> Covid Graph </div>
        <CovidGraph alpha3Code={this.state.countryData.alpha3Code} />
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
export default withRouter(ShowCountryData);*/