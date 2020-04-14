import React from 'react';
import {observable,action,configure,computed} from 'mobx';
import {observer} from 'mobx-react';

import './todoApp.css';

configure({enforceActions:'observed'});

function Todo(props){
        return(
        <li id={props.todoData.id} className="todo-list-item" key={props.todoData.id}>
            <input  className='checkbox' defaultChecked={props.todoData.isChecked} onClick={()=>props.toShowWhetherChecked(props.todoData.id)} type='checkbox' />
            <input  className='text' type='text' defaultValue={props.todoData.todoInput} disabled={props.todoData.isChecked} onKeyDown={(event)=>props.updateTodo(props.todoData.id,event.target.value,event.keyCode)}/>
            <button type='button' className='delete-btn' onClick={()=>props.removeFromTodosList(props.todoData.id)}>X</button>
        </li>
        );
}
function Footer(props){
    return(<div className='flex justify-between'>
                <span>{props.activeTodos} items left</span>
                <div className='todo-list-details'>
                <button className='all' onClick={()=>props.displayAllTodos('all')}>all</button>
                <button className='active' onClick={()=>props.displayAllTodos('active')}>active</button>
                <button className='completed'  onClick={()=>props.displayAllTodos('completed')}>completed</button>
                </div>
                <button className='completed'  onClick={props.clearCompleted}>clear completed</button>
            </div>);
        
}
@observer
class TodoApp extends React.Component{
    @observable displayTodosList=[];
    @observable allTodosList=[];
    @observable count=0;
    @action.bound
    addToactiveList(event){
        let value = event.target.value;
        if(event.keyCode===13 && value!==''){
            let todoId=Math.random();
            this.allTodosList.push({id:todoId,todoInput:value,isChecked:false});
            event.target.value='';
        }
        this.displayTodosList=this.allTodosList;
    }
    @action.bound
    removeFromTodosList(todoId){
        this.allTodosList.forEach((eachTodo,index) =>{
            if(eachTodo.id===todoId){
                this.allTodosList.splice(index, 1);
            }
        });
        this.displayTodosList=this.allTodosList;
    }
    @action.bound
    toShowWhetherChecked(todoId){
        let indexValue;
        this.allTodosList.forEach((eachTodo,index) =>{
            if(eachTodo.id===todoId){
                indexValue=index;
            }
        });
        if(!this.allTodosList[indexValue].isChecked){
            this.allTodosList[indexValue].isChecked=true;
        }
        else{
            this.allTodosList[indexValue].isChecked=false;
        }
        this.displayTodosList=this.allTodosList;
    }
    @action.bound
    clearCompleted(){
        this.allTodosList.forEach((eachTodo,index) =>{
            if(eachTodo.isChecked===true){
                this.allTodosList.splice(index, 1);
            }
        });
        this.displayTodosList=this.allTodosList;
    }
    @action.bound
    displayAllTodos(todoListType){
        let todoList;
        switch(todoListType){
            case 'all':{
                todoList=this.allTodosList;
                break;
            }
            case 'active':{
                todoList=this.allTodosList.filter(eachTodo=>eachTodo.isChecked===false);
                break;
            }
            case 'completed':{
                todoList=this.allTodosList.filter(eachTodo=>eachTodo.isChecked===true);
                break;
            }
        }
        this.displayTodosList=todoList;
    }
    @action.bound
    updateTodo(todoId,value,eventKeyCode){ 
        if(eventKeyCode===13){
                this.allTodosList.forEach((eachTodo,index) =>{
                    if(eachTodo.id===todoId){
                        this.allTodosList[index].todoInput=value;
                    }
                });
        }
        this.displayTodosList=this.allTodosList;
    }
    @computed
    get numberOfActiveTodos(){
        let activeTodos=0;
        this.allTodosList.forEach(eachTodo=>{
            if(eachTodo.isChecked===false){
                activeTodos++;
        }});
        return this.count=activeTodos;
    }
    render(){
            return(
        <div className='flexbox'>
        <h1 className='todo-title'>todos</h1>
        <input onKeyDown={this.addToactiveList} type='text' className="text1" placeholder="what needs to be done?" />
            <ul>
              {this.displayTodosList.map((eachTodo)=>{
                    return <div><Todo todoData={eachTodo} removeFromTodosList={this.removeFromTodosList} toShowWhetherChecked={this.toShowWhetherChecked} updateTodo={this.updateTodo}/>
                    </div>;
                 })}
            </ul>
            {(this.displayTodosList.length>0)?
          <Footer displayAllTodos={this.displayAllTodos} clearCompleted={this.clearCompleted} activeTodos={this.numberOfActiveTodos} /> :''}
        </div>);
        }
        
}
export default TodoApp;
/*import React from 'react';
import {observable,action,configure} from 'mobx';
import {observer} from 'mobx-react';
configure({enforceActions:'observed'});
import './todoApp.css';
let id=0;
function Todo(props){
        return(
        <li id={props.id} className="todo-list-item" key={props.id}>
            <input  className='checkbox' defaultChecked={props.isChecked} onClick={props.toShowWhetherChecked} type='checkbox' />
            <input  className='text' type='text' defaultValue={props.value} disabled={props.isChecked}/>
            <button type='button' className='delete-btn'onClick={props.removeFromTodosList}>X</button>
        </li>
        );
}
@observer

class TodoApp extends React.Component{
    @observable listToShow=[];
    @observable todosList=[];
    @observable activeList=[];
    @observable values=[];
    @observable completedList=[];
    @observable isChecked=[];
    @action.bound
    addToactiveList(event){
        let value = event.target.value;
        if(event.keyCode===13 && value!==''){
            this.todosList=[...this.todosList,id];
            this.activeList=[...this.activeList,id];
            this.listToShow=[...this.listToShow,id++];
            this.values=[...this.values,value];
            this.isChecked=[...this.isChecked,false];
            event.target.value='';
        }
    }
    @action.bound
    removeFromTodosList(event){
        
            let removeId = event.target.parentNode.id;
            alert(removeId);
            let todoList=this.todosList.filter((item)=>{
                if(item!==removeId){
                    return item;
                }});
            this.todosList=todoList;
            let activeTodoList=this.activeList.filter((item)=>
            {
                if(item!==removeId){
                    return item;
                }});
            this.activeList=activeTodoList;
            let completedTodoList=this.completedList.filter(item=>{
                if(item!==removeId){
                    return item;
                }});
            this.completedList=completedTodoList;
            let listTodoListShow=this.listToShow.filter(item=>{
                if(item!==removeId){
                    return item;
                }});
            this.listToShow=listTodoListShow;
    }
    @action.bound
    toShowWhetherChecked(event){
        let parentId = event.target.parentNode.id;
            this.isChecked=this.isChecked.map((item,index)=>(index===parentId)?!item:item);
        if(event.target.checked){
            this.activeList=this.activeList.filter((item)=>item!==parentId);
            this.completedList=[...this.completedList,parentId];
        }
        else{
            this.activeList=[...this.activeList,parentId];
            this.completedList=this.completedList.filter((item)=>item!==parentId);
        }
    }
    @action.bound
    showAll(){
            this.listToShow=this.todosList;
    }
    @action.bound
    showActive(){
            this.listToShow=this.activeList;
    }
    @action.bound
    showCompleted(){
            this.listToShow=this.completedList;
    }
    @action.bound
    clearCompleted(){
            this.completedList=[];
            this.todosList=this.activeList;
            this.listToShow=this.activeList;
    }
    render(){      
        return(
        <div className='flexbox'>
        <h1 className='todo-title'>todos</h1>
        <input onKeyDown={this.addToactiveList} type='text' className="text1" placeholder="what needs to be done?" />
            <ul>
              {this.listToShow.map((id)=>{
                    return <div><Todo id={id} key={id} value={this.values[id]} 
                    isChecked={this.isChecked[id]} toShowWhetherChecked={this.toShowWhetherChecked}
                    removeFromTodosList={this.removeFromTodosList}/>
                    </div>;
                 })}
            </ul>
            <div className={this.todosList.length<=0?'dont-display':'display'}>
                <span>{this.activeList.length} items left</span>
                <div className='todo-list-details'>
                <button onClick={this.showAll} className='all'>all</button>
                <button onClick={this.showActive} className='active'>active</button>
                <button onClick={this.showCompleted} className='completed'>completed</button>
                </div>
                <button className={this.completedList.length<=0?'dont-display':'clearCompleted'} onClick={this.clearCompleted}>clear completed</button>
            </div>
        </div>);
    }
}
export default TodoApp;*/