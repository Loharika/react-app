import React from 'react';

class TodoComponent extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
        <li id={this.props.todo.id} className="todo-list-item" key={this.props.todo.id}>
            <input  className='checkbox' defaultChecked={this.props.todo.isCompleted} onClick={this.props.todo.onCompleteTodo} type='checkbox' />
            <input  className='text' type='text' defaultValue={this.props.todo.title} disabled={this.props.todo.isCompleted} onKeyDown={this.props.todo.onUpdateTodoTitle}/>
            <button type='button' className='delete-btn' onClick={()=>this.props.onRemoveTodo(this.props.todo.id)} >X</button>
        </li>
        );
    }
        
}
export default TodoComponent;