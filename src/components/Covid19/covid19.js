/*global fetch*/
/*global covid19*/
import React from 'react';
import {withRouter} from 'react-router';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend }
    from 'recharts';
class CovidGraph extends React.Component{
    constructor(props){
        super(props);
        this.state={
        covid19Data:[],
        eachCountryDataForGraph:[],
        iso3Code:this.props.alpha3Code}
    }
  async componentDidMount(){
    const covidData=covid19.data()
    this.setState({
        covid19Data:covidData,
        eachCountryDataForGraph:covidData.filter(x=>x.country_iso3===this.state.iso3Code).groupByDate()
    });
  }

    render(){
        return (
    	<LineChart width={600} height={300} data={this.state.eachCountryDataForGraph}
            margin={{top: 50, right: 30, left: 20, bottom: 5}}>
       <XAxis dataKey="date"/>
       <YAxis/>
       <CartesianGrid strokeDasharray="3 3"/>
       <Tooltip/>
       <Legend />
       <Line type="monotone" dataKey="deaths" stroke="#8884d8" activeDot={{r: 10}}/>
       <Line type="monotone" dataKey="recovered" stroke="#123456" activeDot={{r: 10}}/>
       <Line type="monotone" dataKey="confirmed" stroke="teal" activeDot={{r: 10}}/>
      </LineChart>
    );
    }
    
}
export default withRouter(CovidGraph);
