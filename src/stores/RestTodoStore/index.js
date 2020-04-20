import { observable,computed,action} from 'mobx';
import Todo from './TodoModel/index';
/*let  request = new XMLHttpRequest();
let data=[];
request.open('GET', 'https://5e6864ded426c00016b7cfce.mockapi.io/api/v1/users123', true);
request.responseType = 'text';
request.onload = function() {
    data = request.response;
};
request.send();

*/
class TodoStores {
    @observable todos;
   @observable selectedFilter;
    constructor(){
        this.todos=[];
        this.selectedFilter="ALL";
    }
    @action.bound
    addDataFromTheServer(serverData){
        serverData.forEach(eachTodo=>{
            let todoObject={
                id:eachTodo.id,
                title:eachTodo.title,
                isCompleted:eachTodo.isCompleted,
            };
            let todo=new Todo(todoObject);
            this.todos.push(todo);
        });
    }
   @action.bound
   onAddTodo(value) {
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
let todoStore=new TodoStores();
//const todoReactionArray=reaction(()=>(todoStore.todos.length),(alertValue)=>{alert('array changed')});
export default todoStore;