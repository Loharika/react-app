/*global fetch*/
import { observable,computed,action} from 'mobx';
import TodoModel from './TodoModel/index';
import {API_INITIAL,API_FETCHING,API_FAILED,API_SUCCESS} from '@ib/api-constants';

class TodoStores {
    @observable todos;
   @observable selectedFilter;
   @observable getUsersApiStatus;
    @observable getUsersApiError;
    @observable allTodos;
    constructor(){
        this.todos=[];
        this.selectedFilter="ALL";
        this.init();
    }
    @action.bound
    init(){
        this.getUsersApiStatus=API_INITIAL;
        this.getUsersApiError=null;
        this.allTodos=[];
    }
    @action.bound
    clearStore(){
        this.init();
    }
    @action.bound
    getTodos(){
        this.getUsersApiStatus=API_FETCHING;
        fetch('https://5e6864ded426c00016b7cfce.mockapi.io/api/v1/users123')
        .then(res=>res.json())
        .then(this.setUsersAPIResponse)
        .catch(this.setUsersAPIError);
    }
    @action.bound
    setUsersAPIResponse(usersResponse){
        
        this.allTodos=usersResponse.map((user)=>user.title);
        this.allTodos=usersResponse.map((eachTodo)=>{
            let todoObject={
                id:eachTodo.id,
                title:eachTodo.title,
                isCompleted:eachTodo.isCompleted,
            };
            return new TodoModel(todoObject);
        });
        this.getUsersApiStatus=API_SUCCESS;
    }
    @action.bound
    setUsersAPIError(error){
       
        this.getUsersApiError=error;
        this.getUsersApiStatus=API_FAILED;
    }
    
   @action.bound
   onAddTodo(value) {
       this.selectedFilter="ALL";
       let todoObject={
                id:Math.random(),
                title:value,
                isCompleted:false,
            };
       let todo=new TodoModel(todoObject);
       this.allTodos.push(todo);
   }
    @action.bound
   onRemoveTodo(todoId){
        this.allTodos.forEach((eachTodo,index) =>{
            if(eachTodo.id===todoId){
                this.allTodos.splice(index, 1);
            }
        });
   }
  @action.bound
   onChangeSelectedFilter(filterType) {
      this.selectedFilter=filterType;
   }
   @action.bound
   onClearCompleted(){
        this.allTodos.forEach((eachTodo,index) =>{
            if(eachTodo.isCompleted===true){
                this.allTodos.splice(index, 1);
            }
        });
    }
    
    
    @computed 
    get activeTodosCount(){
        let activeTodos=0;
        this.allTodos.forEach(eachTodo=>{
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
                filteredTodoList=this.allTodos;
                break;
            }
            case 'ACTIVE':{
                filteredTodoList=this.allTodos.filter(eachTodo=>eachTodo.isCompleted===false);
                break;
            }
            case 'COMPLETED':{
                filteredTodoList=this.allTodos.filter(eachTodo=>eachTodo.isCompleted===true);
                break;
            }
            default :{
                return new Error("invalid filter type")
            }
        }
        return filteredTodoList;
        
    }
}
let todoStore=new TodoStores();
//const todoReactionArray=reaction(()=>(todoStore.todos.length),(alertValue)=>{alert('array changed')});
export default todoStore;