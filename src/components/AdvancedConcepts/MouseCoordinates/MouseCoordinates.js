import React from 'react';

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
        const {state,onChangeMousePointer}=this;
        const {render}=this.props;
        return (
            <div className='w-screen'>{render(state,onChangeMousePointer)}</div>
            );
    }
}
export default MouseCoordinates;