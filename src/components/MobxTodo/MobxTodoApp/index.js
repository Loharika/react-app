import React from 'react';
import {reaction,action,computed,observable} from 'mobx';
import {observer}  from 'mobx-react';
import './index.css';
import todoStore from '../../../stores/TodoStore/index.js';
import AddTodo from '../AddTodo/index.js';
import Footer from '../TodoFooter/index.js';
import TodoComponent from '../Todo/index.js';

@observer
class MobxTodoApp extends React.Component{
    @observable value;
    constructor(props){
        super(props);
        this.value='';
    }
    @action.bound
    onAddTodo(value){
        this.value=value;
        todoStore.onAddTodo(this.value);
    }
    /*@computed
    get renderTodoListTotal(){
        console.log(todoStore.todos);
        return (
            <TodoList todos={todoStore.todos}/>
            );
    }*/
    @computed
    get renderTodoList(){
        if(todoStore.filteredTodos.length>0){
            return todoStore.filteredTodos.map(eachTodo=>{return(
           <TodoComponent todo={eachTodo} onRemoveTodo={todoStore.onRemoveTodo}/>
           )}); 
        }
        else{
            return '';
        }
       
    }
    todoListReaction=reaction(()=>{return todoStore.activeTodosCount},(activeTodosCount)=>{
        if(!activeTodosCount){
            alert("Congrats!");
        }
    });
    render(){
        return(
        <div className='flexbox'>
        <h1 className='todo-title'>todos</h1>
        <AddTodo onAddTodo={this.onAddTodo}/>
        <ul>
            {this.renderTodoList}
        </ul>
        <Footer onChangeSelectedFilter={todoStore.onChangeSelectedFilter} onClearCompleted={todoStore.onClearCompleted} activeTodosCount={todoStore.activeTodosCount}/>
        </div>);
    }
}
export default MobxTodoApp;