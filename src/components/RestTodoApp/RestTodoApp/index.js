/*global fetch*/
import React from 'react';
import {reaction,action,computed,observable} from 'mobx';
import {observer}  from 'mobx-react';


import todoStore from '../../../stores/RestTodoStore/index';
import AddTodo from '../AddTodo/index';
import Footer from '../TodoFooter/index';
import TodoComponent from '../Todo/index';
import loaderIcon from '../loader-icon.svg';

import './index.css';

@observer

class RestTodoApp extends React.Component{
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
        this.getDataTheFromServer();
        this.isLoading=false;
    }
    @action.bound
    async getDataTheFromServer(){
        const response=await fetch("https://5e6864ded426c00016b7cfce.mockapi.io/api/v1/users123");
        const jsonDataFromServer=await response.json();
        this.serverDataStatus=response.status;
        this.data=jsonDataFromServer;
        todoStore.addDataFromTheServer(this.data);
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
    @action.bound
    renderTheData(){
        console.log('Hello'+this.serverDataStatus);
            if(this.data.length>0 || todoStore.todos.length>0){
                return (
                    <ul>
                    {this.renderTodoList}
                    </ul>
                    );
            }
        else if (this.data.length===0 || todoStore.length===0){
                return(<div>No data found</div>);
            }
    }
    render(){
        if(window.navigator.onLine){
            return(
            <div className='flexbox'>
               <h1 className='todo-title'>todos</h1>
            <AddTodo onAddTodo={todoStore.onAddTodo}/>
                {this.isLoading?<img src={loaderIcon} alt='loading icon'/>:this.renderTheData()}
                {todoStore.activeTodosCount>0?<Footer onChangeSelectedFilter={todoStore.onChangeSelectedFilter} onClearCompleted={todoStore.onClearCompleted} activeTodosCount={todoStore.activeTodosCount}/>:''}
            </div>);
        }
        else{
            return (
                <div>
                    <div>Network Error</div>
                    <div>
                        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={this.getDataTheFromServer}>
                            Retry
                        </button>
                    </div>
                </div>
                );
            
        }
    }
}
export default RestTodoApp;