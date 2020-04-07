import React from 'react';
import {EachCountryCard,CountryFlagImage,EachDetail,CountryDetailsHeading,
    CountryCardDetails,CountryCardTitle}
    from '../../styleComponents/styleComponents.js';
function CountryCard(props){
        return(
    <EachCountryCard id={props.countryData.alpha3Code} onClick={props.eachCountryData}> 
        <CountryFlagImage src={props.countryData.flag} alt="Avatar" id={props.countryData.alpha3Code} />
        <CountryCardDetails id={props.countryData.alpha3Code} >
            <CountryCardTitle id={props.countryData.alpha3Code}>{props.countryData.name}</CountryCardTitle>
            <EachDetail id={props.countryData.alpha3Code}><CountryDetailsHeading>Population: </CountryDetailsHeading> {props.countryData.population}</EachDetail>
            <EachDetail id={props.countryData.alpha3Code}><CountryDetailsHeading>Region: </CountryDetailsHeading> {props.countryData.region}</EachDetail>
            <EachDetail id={props.countryData.alpha3Code}><CountryDetailsHeading>Capital:</CountryDetailsHeading> {props.countryData.capital}</EachDetail>
        </CountryCardDetails>
     </EachCountryCard>
            );
}
export default CountryCard;