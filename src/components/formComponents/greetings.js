import React from 'react';
import {withRouter} from "react-router-dom";
import NavBar from './navBar.js';

class Greetings extends React.Component{
  constructor(props) {
    super(props);
    this.state = {value: '',enteredUserName:''};
  }
  handleChange=(event)=> {
    this.setState({value: event.target.value});
  }

  handleSubmit=(event)=> {
    
    if(this.state.value.length!==0){
    this.setState(()=>({
      enteredUserName:`Hello, ${this.state.value} Have a nice Day`,
      value:''
    }));
    }
    event.preventDefault();
  }

  render(){
    return (
      <div className='greeting-main'>
            <NavBar history={this.props.history} nameOnNavBar={'Greetings'}/>
              <form onSubmit={this.handleSubmit} className='greeting'>
              <div><input type="text" placeholder='Enter your Name' value={this.state.value} onChange={this.handleChange} /></div>
              <div><input type="submit" value="Greet" /></div>
              <span>{this.state.enteredUserName}</span>
              </form>
              </div>
      );
  }
}
export default withRouter(Greetings);