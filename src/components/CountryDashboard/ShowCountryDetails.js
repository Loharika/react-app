/*global fetch*/
import React from 'react';
import { withRouter } from 'react-router-dom';
import { Header } from './Header'
import { inject, observer } from "mobx-react";

@inject('themeStore')
@observer
class ShowCountryDetails extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props.location.state[0])
        this.state = ({ borderData: [], object: this.props.location.state[0] })

    }
    componentDidMount = () => {
        this.getCountryDetails()
    }
    getCountryDetails = () => {
        fetch("https://restcountries.eu/rest/v2/all")
            .then(response => response.json())
            .then(json => this.setState({ borderData: json, object: this.props.location.state[0] }));
    }
    backToPrevious = () => {
        this.props.history.goBack();
    }
    borderName = (alpha3Code) => {
        return this.state.borderData.map(eachObj => {
            if (eachObj.alpha3Code === alpha3Code)
                return eachObj.name
        })
    }
    borderData = (alpha3Code) => {
        this.state.borderData.find(eachObj => {
            if (eachObj.alpha3Code === alpha3Code) {
                this.props.history.push({ pathname: `/CountriesDashboardApp/${eachObj.alpha3Code}`, state: [eachObj] })
                this.getCountryDetails();
            }
        })
    }
    render() {
        const {themeStore:{selectedTheme,updateCurrentTheme}}=this.props;
        return <div>
            <Header selectedTheme={selectedTheme} onChangeTheme={updateCurrentTheme}/>
            <div className={selectedTheme==="Light Mode"?"bg-white":"bg-gray-800 text-white"}>
                <button onClick={this.backToPrevious} className={selectedTheme==="Light Mode"?"h-12 text-2xl rounded-none bg-white shadow-sm m-2":"h-12 text-2xl rounded-none bg-gray-800 text-white shadow-sm m-2"}>Back</button>
                <div className="flex justify-between">
                    <div>   
                        <img src={this.state.object.flag} alt="flag" style={{width:"300px"}}/>
                    </div>
                    <div>
                        <b className="font-bold text-4xl">{this.state.object.name}</b>
                        <p><b>Native Name: </b>{this.state.object.nativeName}</p>
                        <p><b>Population: </b>{this.state.object.population}</p>
                        <p><b>Region: </b>{this.state.object.region}</p>
                        <p><b>Sub Region: </b>{this.state.object.subregion}</p>
                        <p><b>Capital: </b>{this.state.object.capital}</p>
                    </div>
                    <div>
                        <p><b>Top Level Domain:</b> {this.state.object.topLevelDomain[0]}</p>
                        <p><b>Currencies:</b> {this.state.object.currencies[0].name}</p>
                        <p><b>Languages:</b> {this.state.object.languages.map(eachObj=>eachObj.name).join(",")}</p>
                    </div>
                </div>
                 <div className="ml-64 mt-6">
                    <b>Border Countries:</b><br/>
                    <div>
                        {this.state.object.borders.map(eachEl=><button key={eachEl} onClick={()=>this.borderData(eachEl)} className={selectedTheme==="Light Mode"?"shadow-xl bg-white h-10 mr-8 mt-2":"shadow-xl bg-gray-800 text-white h-10 mr-8 mt-2"}>{this.borderName(eachEl)}</button>)}
                    </div>
                </div>
            </div>
        </div>
        }
}
export default withRouter(ShowCountryDetails)