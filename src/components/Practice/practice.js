/*import React from 'react';

export default class FadeApp extends React.Component {
constructor(){
    super();
    this.state={
        value:'',
    }
}
add=(v)=> {
 alert(v);   
}


render() {
    let value;
    if(this.state.value){
        value="enabled";
    }
    else{
        value="disabled";
    }
    return (
        <div className="add-item">
            <input onChange={e => this.setState({ value: e.target.value })} value={this.state.value} />
                <button type='button' disabled={!this.state.value} style={{backgroundColor:'skyblue'}} onClick={()=>this.add(value)}>Click me</button>
        </div>
    );
}

}*/

import React from 'react';
import styled from  '@emotion/styled';

const Fade = styled.div`
  ${props => props.out ?
    `display: none;`
   : `display: inline-block;`
   }
  animation: ${props => props.out ? 'fadeOut' : 'fadeIn'} 1s linear 10;
  @keyframes fadeIn{
  from {
    transform: scale(.25);
    opacity: 0;
  }

  to {
    transform: scale(1);
    opacity: 1;
  }
  }
@keyframes fadeOut{
  from {
    transform: scale(1);
    opacity: 0;
  }

  to {
    transform: scale(.25);
    opacity: 1;
  }
}
`;
function FadeApp() {
  return (
    <div className='w-screen h-screen flex justify-center items-center text-3xl'>
      <Fade>&lt;💅test&gt;</Fade>
    </div>
  );
}

export default FadeApp;

/*import React from 'react'
let state=0;
class Practice extends React.Component{
    state={
        count:0
    }
    onIncrement=()=>{
        this.setState({count:this.state.count+1});
        console.log('First log',this.state.count);
        this.setState({count:this.state.count+1});
        console.log('Second log',this.state.count);
        this.setState({count:this.state.count+1});
        console.log('Third log',this.state.count);
        }
    /*onIncrementWithSetStateAsFunction=()=>{
        this.setState(prestate=>{
            count:prestate.count+1
        })
        this.setState(prestate=>{
            count:prestate.count+1
        })
        this.setState(prestate=>{
            count:prestate.count+1
        })
        console.log('Last log',this.state.count);
    }
    render(){
    return (
        <div>
    <button type='button' onClick={this.onIncrement}>Click on button1</button>
    </div>
    );
    }
    
    
}
//export {CarList,Car};
export default Practice;
*/
/*class ChildCounter extends React.Component{
    state={
        childCounter1:0,
        childCounter2:0
    }
    onIncrement=()=>{
        this.props.onParentCounterIncrement();
        this.setState({
            childCounter1:this.state.childCounter1+1
        })
    }
    render(){
        console.log('ChildCounter Called');
        return ' ';
    }
}
class ParentCounter extends React.Component{
    state={
        parentCounter:0
    }
    onParentCounterIncrement=()=>{
        this.setState({
            parentCounter1:this.state.parentCounter+1
        })
    }
    render(){
        console.log('ParentCounter Called')
        return (
            <ChildCounter 
            onParentCounterIncrement={this.onParentCounterIncrement}
            parentCounter={this.state.parentCounter}
            />
            );
    }
}
export default ParentCounter;*/