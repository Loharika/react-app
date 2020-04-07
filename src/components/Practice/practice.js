import React from 'react'
let state=0;
/*class Practice extends React.Component{
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
class ChildCounter extends React.Component{
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
export default ParentCounter;