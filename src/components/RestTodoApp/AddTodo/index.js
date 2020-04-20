import React from 'react';
import {observable} from 'mobx';
import {observer} from 'mobx-react';
@observer
class AddTodo extends React.Component{
    @observable todoTitle;
    constructor(){
        super();
        this.todoTitle='';
    }
    onAddTodo=(todoTitle)=>{
        this.props.onAddTodo(todoTitle);
    }
    
    onChangeTodo=(event)=>{
        this.todoTitle=event.target.value;
    }
    onKeyDownTodo=(event)=>{
        if(event.keyCode===13){
            this.onAddTodo(this.todoTitle);
            this.todoTitle='';
        }
    }
    render(){
        return (
            <div className='flex w-1/3'>
            <input onChange={this.onChangeTodo} value={this.todoTitle} onKeyDown={this.onKeyDownTodo} placeholder='Enter the todo...!!'className='flex-grow w-auto p-2 rounded border-2 border-grey-100'/>
            </div>
            );
    }
}
export default AddTodo;
