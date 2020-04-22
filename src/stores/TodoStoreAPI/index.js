import {observable,action,computed} from 'mobx';
import {bindPromiseWithOnSuccess} from '@ib/mobx-promise';
import {API_INITIAL} from '@ib/api-constants';
import Todo from '../RestTodoStore/TodoModel';
class TodosStoreAPI{
        @observable getTodoListAPIStatus;
        @observable getTodoListAPIError;
        @observable todosAPIService;
        @observable todos;
        @observable selectedFilter;
    constructor(todosService){
        this.todosService=todosService;
        this.init();
    }
    init=()=>{
        this.getTodoListAPIStatus=API_INITIAL;
        this.getTodoListAPIError=null;
        this.todos=[];
        this.selectedFilter='ALL';
    }
    clearStore=()=>{
        this.init();
    }
    getTodos=()=>{
        const todosPromise=this.todosService.getTodosAPI();
        return bindPromiseWithOnSuccess(todosPromise)
        .to(this.setGetTodoListAPIStatus,this.setTodoListResponse)
        .catch(this.setGetTodoListAPIError);
    }
    setGetTodoListAPIStatus=(apiStatus)=>{
        this.getTodoListAPIStatus=apiStatus;
    }
     setTodoListResponse=(todosResponse)=>{
        todosResponse.forEach(todo=>{
            let todoObject={
                id:todo.id,
                title:todo.title,
                isCompleted:todo.isCompleted
            };
            this.todos.push(new Todo(todoObject));
        });
    }
    setGetTodoListAPIError=(error)=>{
        this.getTodoListAPIError=error;
    }
    @action.bound
   onAddTodo=(value)=>{
       this.selectedFilter="ALL";
       let todoObject={
                id:Math.random(),
                title:value,
                isCompleted:false,
            };
       let todo=new Todo(todoObject);
       this.todos.push(todo);
   }
   @action.bound
   onRemoveTodo(todoId){
      
        this.todos.forEach((eachTodo,index) =>{
            if(eachTodo.id===todoId){
                this.todos.splice(index, 1);
            }
        });
   }
  @action.bound
   onChangeSelectedFilter(filterType) {
      this.selectedFilter=filterType;
   }
    @action.bound
   onClearCompleted(){
        const {todos}=this;
        this.todos=todos.filter(todoModel=>(!todoModel.isCompleted));
    }
    @computed 
    get activeTodosCount(){
        let activeTodos=0;
        this.todos.forEach(eachTodo=>{
            if(eachTodo.isCompleted===false){
                activeTodos++;
        }});
        return activeTodos;
    }
    
    @computed
    get filteredTodos(){
        let filteredTodoList;
        switch(this.selectedFilter){
            case 'ALL':{
                filteredTodoList=this.todos;
                break;
            }
            case 'ACTIVE':{
                filteredTodoList=this.todos.filter(eachTodo=>eachTodo.isCompleted===false);
                break;
            }
            case 'COMPLETED':{
                filteredTodoList=this.todos.filter(eachTodo=>eachTodo.isCompleted===true);
                
                break;
            }
        }
        return filteredTodoList;
        
    }
}
export default TodosStoreAPI;