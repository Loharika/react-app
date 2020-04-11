import React from 'react';
function TodoComponent(props){
        /*return (
        <li id={props.id} className="todo-list-item" key={props.id}>
            <input  className='checkbox' defaultChecked={props.isComplepled} type='checkbox' />
            <input  className='text' type='text' defaultValue={props.title} disabled={props.isCompleted} />
            <button type='button' className='delete-btn' >X</button>
        </li>
        );*/
        return (
        <li id={props.todo.id} className="todo-list-item" key={props.todo.id}>
            <input  className='checkbox' defaultChecked={props.todo.isCompleted} onClick={props.todo.onCompleteTodo} type='checkbox' />
            <input  className='text' type='text' defaultValue={props.todo.title} disabled={props.todo.isCompleted} onKeyDown={props.todo.onUpdateTodoTitle}/>
            <button type='button' className='delete-btn' onClick={()=>props.onRemoveTodo(props.todo.id)} >X</button>
        </li>
        );
        
}
export default TodoComponent;