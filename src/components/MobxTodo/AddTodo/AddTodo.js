import React from 'react';
import {observable} from 'mobx';
class AddTodo extends React.Component{
    @observable todoTitle;
    constructor(){
        super();
        this.todoTitle='';
    }
    onAddTodo=(todoTitle)=>{
        this.props.onAddTodo(todoTitle);
    }
    onKeyDown=(event)=>{
        if(event.keyCode===13){
            this.onAddTodo(this.todoTitle);
            this.todoTitle='';
        }
    }
    onChange=(event)=>{
        this.todoTitle=event.target.value;
    }
    render(){
        return (
            <input onChange={this.onChange} onKeyDown={this.onAddTodo}/>
            );
    }
}
export default AddTodo;
