import React from 'react';
import NavBar from './navBar.js';
let array=[false,false,false,false,false,false];
class VisitedCities extends React.Component {
   constructor(){
    super();
    this.state = {
      checkBoxClick :[],
      cityNames:['Hyderabad','Chennai','Bangalore','Pune','Mumbai','Delhi'],
      displayCities:''
    };
   }
   
   handleCheckBoxClick=(event)=>{
       if(event.target.checked){
           array[event.target.id]=true;
       }
       else{
           array[event.target.id]=false;
       }
       this.setState({
           checkBoxClick:array
       });
}
displayVisitedCities=(event)=>{
    let cityNamesOnce=[];
    event.preventDefault();
    this.state.checkBoxClick.forEach((value,index)=>{
        if(value){
            cityNamesOnce.push(this.state.cityNames[index]);
        }
    });
    this.setState(()=>({
        displayCities:`I have visited these Cities ${cityNamesOnce.join()}`
    }));
}
  render(){
    return (
    <div className='visited-cities-main'>
    <NavBar history={this.props.history} nameOnNavBar={'Visited Cities'}/>
    <form onSubmit={this.displayVisitedCities} className='city-list'>
    <div>
        <div className='each-city'>
            <input type="checkbox" onClick={this.handleCheckBoxClick} id={0} city='Hyderabad'/>
            <label for="0">Hyderabad</label>
        </div>
        <div className='each-city'>
            <input type="checkbox" onClick={this.handleCheckBoxClick} id={1} city='Chennai' />
            <label for="1">Chennai</label>
        </div>
        <div className='each-city'>
            <input type="checkbox" onClick={this.handleCheckBoxClick} id={2} city='Bangalore' />
            <label for="2">Bangalore</label>
        </div>
        <div className='each-city'>
            <input type="checkbox" onClick={this.handleCheckBoxClick} id={3}  city='Pune'/>
            <label for="3">Pune</label>
        </div>
        <div className='each-city'>
            <input type="checkbox" onClick={this.handleCheckBoxClick} id={4} city='Mumbai' />
            <label for="4">Mumbai</label>
        </div>
        <div className='each-city'>
            <input type="checkbox" onClick={this.handleCheckBoxClick} id={5} city='Delhi' />
            <label for="5">Delhi</label>
        </div>
        </div>
        <div><input type='submit' value='Make your choice'/></div>
        <span>{this.state.displayCities}</span>
        </form>
    </div>
    );
  }
}

export default VisitedCities;