import React from 'react';
import {observable} from 'mobx';

class ViewEditToggle extends React.Component{
    @observable text;
    constructor(){
        super();
        this.text='Click on the edit button to start editing';
    }
    onToggle=()=>{
        const {onToggle}=this.props;
        onToggle();
    }
    updateText=(text)=>{
        this.text=text;
    }
    render(){
        const {toggleStatus}=this.props;
        const {text,updateText,onToggle}=this;
        return (
            <div className='flex flex-col h-24 justify-center w-full items-center' style={{backgroundColor:'#e2e8f0'}}>
                <h1 className='my-1 flex justify-center font-bold text-lg ' > ViewEditToggle</h1>
                <div className='flex' >
                   {!toggleStatus?<input type='text' defaultValue={text} onKeyDown={()=>updateText(event.target.value)} className="w-auto border-2 border-blue-400 p-1"/>:
                        <p>{text}</p>}
                        <button onClick={onToggle} className="bg-blue-500 hover:bg-blue-700 text-white mx-1 py-1 px-2 rounded" >
                              {toggleStatus?'Edit':'Cancel'}
                        </button>
                </div>
            </div>
            );
        }
    
}
export default ViewEditToggle;