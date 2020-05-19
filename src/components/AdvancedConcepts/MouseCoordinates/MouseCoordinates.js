import React from 'react';
import DisplayMouseCoordinates from '../DisplayMouseCoordinates/DisplayMouseCoordinates.js';
class MouseCoordinates extends React.Component{
    constructor(){
        super();
        this.state={
            x:0,
            y:0,
        };
    }
    onChangeMousePointer=(event)=>{
        this.setState({
            x:event.clientX,
            y:event.clientY
        });
    }
    render(){
        return (
            <DisplayMouseCoordinates coordinates={this.state} onChangeMousePointer={this.onChangeMousePointer}/>
            );
    }
}
export default MouseCoordinates;