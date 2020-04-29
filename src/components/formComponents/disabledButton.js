import React from 'react';
import NavBar from './navBar.js';
class DisableButton extends React.Component{
    constructor(){
        super();
        this.state={
            checkboxChecked:false,
            displayTextButton:''
        }
    }
    checkBoxClick=(event)=>{
        if(event.target.checked){
            this.setState(()=>({
                checkboxChecked:true,
                displayTextButton:''
            }));
        }
        else{
            this.setState(()=>({
                checkboxChecked:false
            }))
        }
    }
    onClickButton=(event)=>{
        if(!this.state.checkboxChecked){
            this.setState(()=>({
                displayTextButton:`Hi, I am Enabled`
                
            }))
        }
        else{
            this.setState(()=>({
                displayTextButton:''
            }))
        }
    }
    render(){
        return(
            <div className='disabled-button-main'>
            <NavBar history={this.props.history} nameOnNavBar={'Disable Button'}/>
            <form>
            <div  className='total'>
                <div className='checkbox'>
                    <input id='disabled' type="checkbox" onChange={this.checkBoxClick} />
                    <label htmlFor="disabled">Disabled</label>
                    <div>{!this.state.checkboxChecked?<button type="button" onClick={this.onClickButton}>Click Me!</button>:<button type="button" disabled>Click Me!</button>}</div>
                </div>
                <div className='button-and-displaytext'>
                    <span>{this.state.checkboxChecked?'I am Disabled':''}</span>
                    <span>{this.state.displayTextButton}</span>
                </div>
            </div>
            </form>
            </div>
            
            );
    }
}
export default DisableButton;