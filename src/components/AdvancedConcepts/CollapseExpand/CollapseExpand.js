import React from 'react';
import SeparateWithComma from './ListItem';

class CollapseExpand extends React.Component{
    constructor(){
        super();
    }
    getShoppingList=()=>{
        const {list}=this.props;
        return list.map(eachItem=>{
            return (<div className='w-32 flex justify-between'  key={eachItem.name+'*'}>
                        <span>{eachItem.name}</span>
                        <SeparateWithComma key={eachItem.name+'$'} price={eachItem.price}/>
                    </div>);
        });
    }
    render(){
        const {onToggle,toggleStatus}=this.props;
        return (
            <div className='flex flex-col h-auto py-2 justify-center w-full items-center' style={{backgroundColor:'#cbd5e0'}}>
                <h1 className='flex justify-center my-1 font-bold text-lg '>CollapseExpand</h1>
                    <div className='flex'>
                        <span className='items-start'>{this.props.listTitle}  &nbsp;</span>
                        <div className='flex flex-col ' >
                            <div>
                                <button onClick={onToggle} className="bg-blue-500 hover:bg-blue-700 text-white  py-1 px-2 rounded" >
                                      {toggleStatus?'Expand':'Collapse'}
                                </button>
                            </div>
                             {!toggleStatus?<div>{this.getShoppingList()}</div>:''}
                        </div>
                    </div>
            </div>
            );
    }
}
export default CollapseExpand;