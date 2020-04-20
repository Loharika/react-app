import React from 'react';

function Footer(props){
    return(
    <div className='flex justify-between items-center'>
                <span>{props.activeTodosCount} items left</span>
                <div className='todo-list-details'>
                <button className='all' onClick={()=>props.onChangeSelectedFilter('ALL')}>all</button>
                <button className='active' onClick={()=>props.onChangeSelectedFilter('ACTIVE')}>active</button>
                <button className='completed'  onClick={()=>props.onChangeSelectedFilter('COMPLETED')}>completed</button>
                </div>
                <button className='completed'  onClick={props.onClearCompleted}>clear completed</button>
    </div>);
        
}
export default Footer;