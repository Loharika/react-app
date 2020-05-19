import React from 'react';

class DisplayMouseCoordinates extends React.Component{
    render(){
        const {onChangeMousePointer}=this.props;
        return (
             <div className='flex flex-col h-24 justify-center w-full items-center' style={{backgroundColor:'#e2e8f0'}}>
                <div className='flex my-1 justify-center font-bold text-lg'>DisplayMouseCoordinates</div>
                <div onMouseMove={onChangeMousePointer}>The mouse position is ( {this.props.coordinates.x},{this.props.coordinates.y} )</div>
            </div>
            );
    }
}
export default DisplayMouseCoordinates;