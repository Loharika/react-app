import { observable,computed,action} from 'mobx';
import TodoModel from './TodoModel/index';
class TodoStores {
    @observable todos;
   @observable selectedFilter;
    constructor(){
        this.todos=[];
        this.selectedFilter="ALL";
    }
   
  
   @action.bound
   onAddTodo(value) {
       this.selectedFilter="ALL";
       let todo=new TodoModel(value);
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
        this.todos.forEach((eachTodo,index) =>{
            if(eachTodo.isCompleted===true){
                this.todos.splice(index, 1);
            }
        });
    }
    
    
    @computed 
    get activeTodosCount(){
        let activeTodos=0;

        this.todos.forEach(eachTodo=>{
            if(eachTodo.isCompleted===false){
                activeTodos++;
        }});
        this.todos.forEach(eachTodo=>{
            if(eachTodo.isCompleted===true){
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
            default:{
                return new Error("invalid filter type")
            }
        }
        return filteredTodoList;
    }
}
let todoStore=new TodoStores();
//const todoReactionArray=reaction(()=>(todoStore.todos.length),(alertValue)=>{alert('array changed')});
export default todoStore;