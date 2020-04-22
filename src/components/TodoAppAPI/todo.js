import React from 'react';
import {TodoListItem,StyledCheckBox,TodoInputField,RemoveButton} from './styledComponents';
class TodoComponent extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
        <TodoListItem id={this.props.todo.id} key={this.props.todo.id}>
            <StyledCheckBox type='checkbox' defaultChecked={this.props.todo.isCompleted} onClick={this.props.todo.onCompleteTodo}  />
            <TodoInputField  isCompleted={this.props.todo.isCompleted} type='text' defaultValue={this.props.todo.title} disabled={this.props.todo.isCompleted} onKeyDown={this.props.todo.onUpdateTodoTitle}/>
            <RemoveButton onClick={()=>this.props.onRemoveTodo(this.props.todo.id)} >X</RemoveButton>
        </TodoListItem>
        );
    }
        
}
export default TodoComponent;

/*

*/