/*global fetch*/
import React,{Component} from 'react';
import {reaction,action,computed,observable} from 'mobx';
import {observer}  from 'mobx-react';


import todoStore from '../../../stores/RestTodoStore/index';
import AddTodo from '../AddTodo/index';
import Footer from '../TodoFooter/index';
import TodoComponent from '../Todo/index';

import LoadingWrapperWithFailure from '../../common/LoadingWrapperWithFailure';
import NoDataView from '../../common/NoDataView';
import './index.css';

@observer

class RestTodoApp extends Component{
    @observable value;
    @observable data;
    @observable isLoading;
    constructor(props){
        super(props);
        this.value='';
        this.data=[];
        this.serverDataStatus='';
        this.isLoading=true;
    }
    componentDidMount(){
        this.isLoading=false;
        this.doNetworkCalls();
    }
    @action.bound
    doNetworkCalls(){
        todoStore.getTodos();
    }
    @action.bound
    renderUsersList(){
        if(todoStore.filteredTodos.length===0){
            return <NoDataView />;
        }
        //return (
        //allTodos.map((todo)=><div key={Math.random()}>{todo}</div>)
        //);
        return todoStore.filteredTodos.map(eachTodo=>{return(
           <TodoComponent todo={eachTodo} key={eachTodo.id} onRemoveTodo={todoStore.onRemoveTodo}/>
           )});
    }
    @action.bound
    onAddTodo(value){
        this.value=value;
       todoStore.onAddTodo(this.value);
    }
    @computed
    get renderTodoList(){
        if(todoStore.filteredTodos.length>0){
            return todoStore.filteredTodos.map(eachTodo=>{return(
           <TodoComponent todo={eachTodo} key={eachTodo.id} onRemoveTodo={todoStore.onRemoveTodo}/>
           )}); 
        }
        else{
            return '';
        }
       
    }
    todoListReaction=reaction(()=>{return todoStore.activeTodosCount},(activeTodosCount)=>{
        if(!activeTodosCount && todoStore.todos.length!==0){
            alert("Congrats!");
        }
    });
    render(){
    const {getUsersApiStatus,getUsersApiError,filteredTodos}=todoStore;
    //console.log(filteredTodos)
        return (
        <div className='flexbox'>
               <h1 className='todo-title'>todos</h1>
                <AddTodo onAddTodo={todoStore.onAddTodo}/>
                <ul>
                <LoadingWrapperWithFailure key={Math.random()} apiStatus={getUsersApiStatus} apiError={getUsersApiError} 
                onRetryClick={this.doNetworkCalls} renderSuccessUI={this.renderUsersList}
            /></ul>
            {todoStore.activeTodosCount>0?<Footer key={Math.random()} onChangeSelectedFilter={todoStore.onChangeSelectedFilter} onClearCompleted={todoStore.onClearCompleted} activeTodosCount={todoStore.activeTodosCount}/>:''}
            </div>
            );
    }
}
export default RestTodoApp;