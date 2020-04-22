import React from 'react';
import {observable} from 'mobx';
import {observer} from 'mobx-react';
import {AddTodoField,AddTodoInputField} from './styledComponents';
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
            if(this.todoTitle.length!==0){
                this.onAddTodo(this.todoTitle);
                this.todoTitle='';
            }
            else{
                alert("please enter a todo!");
            }
        }
        
    }
    render(){
        return (
            <AddTodoField >
            <AddTodoInputField onChange={this.onChangeTodo} value={this.todoTitle} onKeyDown={this.onKeyDownTodo} placeholder='Enter the todo...!!'/>
            </AddTodoField>
            );
    }
}
export default AddTodo;
