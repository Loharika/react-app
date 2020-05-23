import React,{Component} from 'react';

import {action} from 'mobx';
import LoadingWrapperWithFailure from '../../common/LoadingWrapperWithFailure';
import NoDataView from '../../common/NoDataView';
import AddTodo from './addTodo';
import {Footer} from './footer';
import TodoComponent from './todo';
import {TodoAppStyle,TodoTitle,TodoList} from './styledComponents';
import {inject,observer} from 'mobx-react';
@inject('todosStore')
@observer
class TodoAppAPI extends Component{
    componentDidMount(){
        this.doNetworkCalls();
    }
    @action.bound
    getTodosStore(){
        return this.props.todosStore;
    }
    @action.bound
    doNetworkCalls(){
        this.getTodosStore().getTodos();
    }
    @action.bound
    renderTodos(){
        let returningElement;
        if(this.getTodosStore().filteredTodos.length===0){
            returningElement=(<NoDataView />);
        }
        else{
            returningElement=this.getTodosStore().filteredTodos.map(todo=>{
                 return <TodoComponent key={todo.id} todo={todo} onRemoveTodo={this.getTodosStore().onRemoveTodo}/>;
            });
           
        }
        return returningElement;
    }
    @action.bound
    renderTotalDisplay(){
        const todosStore=this.getTodosStore();
        if(this.getTodosStore().filteredTodos.length===0 && this.getTodosStore().todos.length===0){
            return <NoDataView />;
        }
        else{
            return (
            <TodoAppStyle key={Math.random()}>
               <TodoTitle className='todo-title'>todos</TodoTitle>
                <AddTodo onAddTodo={todosStore.onAddTodo}/>
                <TodoList >
                {this.props.todosStore.filteredTodos.map(todo=>{
                 return <TodoComponent key={todo.id} todo={todo} onRemoveTodo={this.getTodosStore().onRemoveTodo}/>;
            })}
                </TodoList>
            {todosStore.activeTodosCount>0?<Footer key={Math.random()} onChangeSelectedFilter={todosStore.onChangeSelectedFilter} onClearCompleted={todosStore.onClearCompleted} activeTodosCount={todosStore.activeTodosCount}/>:''}
        </TodoAppStyle>
            );
        }
        
    }
    render(){
        const {getTodoListAPIStatus,getTodoListAPIError,filteredTodos,todos}=this.props.todosStore;
        
        return (
            <LoadingWrapperWithFailure apiStatus={getTodoListAPIStatus} key={filteredTodos.length} apiError={getTodoListAPIError} 
                onRetryClick={this.doNetworkCalls} renderSuccessUI={this.renderTotalDisplay}/>
            );
    }
    /*render(){
    const todosStore=this.getTodosStore();
    const {getTodoListAPIStatus,getTodoListAPIError,filteredTodos}=todosStore;
        return (
        <TodoAppStyle>
               <TodoTitle className='todo-title'>todos</TodoTitle>
                <AddTodo onAddTodo={todosStore.onAddTodo}/>
                <TodoList>
                <LoadingWrapperWithFailure key={Math.random()} apiStatus={getTodoListAPIStatus} apiError={getTodoListAPIError} 
                onRetryClick={this.doNetworkCalls} renderSuccessUI={this.renderTodos}
            /></TodoList>
            {todosStore.activeTodosCount>0?<Footer key={Math.random()} onChangeSelectedFilter={todosStore.onChangeSelectedFilter} onClearCompleted={todosStore.onClearCompleted} activeTodosCount={todosStore.activeTodosCount}/>:''}
        </TodoAppStyle>
            );
    }*/
}
export default TodoAppAPI;
