import React from 'react';
import NavBar from './navBar.js';
class YourState extends React.Component{
    constructor(){
        super();
        this.state={
            state:'',
            displaySelectedStateName:''
        };
    }
    getStateName=(event)=>{
        let value=event.target.value;
                this.setState(()=>({
                    state:value
                }));
    }
    displaySelectedState=(event)=>{
                this.setState(()=>({
                    displaySelectedStateName:`I am from "${this.state.state}" state`,
                }));
        event.preventDefault();
    }
    render(){
        return (
            <div className='states-list-main'>
            <NavBar history={this.props.history} nameOnNavBar={'Your State'}/>
            <form onSubmit={this.displaySelectedState} className='state-list'>
            <div><select id="states" onChange={this.getStateName}>
             <option value="">Select your state</option>
              <option value="Andhra Pradesh">Andhra Pradesh</option>
              <option value="Telangana">Telangana</option>
              <option value="Telangana">Telangana</option>
              <option value="Kerala">Kerala</option>
              <option value="Karnataka">Karnataka</option>
              <option value="Haryana">Haryana</option>
            </select></div>
            <div><input type='submit' value='Submit'/></div>
            {this.state.state.length>0?<span>{this.state.displaySelectedStateName}</span>:<span></span>}
            </form>
            </div>
            );
    }
}
export default YourState;