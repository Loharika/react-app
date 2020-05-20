
/*global fetch*/
import React from 'react';
import loaderIcon from '../../components/Country/assets/loader-icon.svg';

function WithCountries(WrappedComponent,paramsId) {
  return class extends React.Component {
    constructor(props) {
        super(props);
        this.state={countries:[]};
    }
    async componentDidMount(){
        
     const response=await fetch("https://restcountries.eu/rest/v2/all");
     const json=await response.json();
     this.setState({
       countries:json,
     });
   }
    render() {
        if(this.state.countries.length===0){
              return (<div className="loading-icon self-center">
                      <img src={loaderIcon} alt="loaderIcon"/>
                      </div>);                  
            }
        return <WrappedComponent countries={this.state.countries} history={this.props.history} paramsId={paramsId}/>;
    }
  };
}
export {WithCountries};
