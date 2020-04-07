import React from 'react';
import './todo-list.css';
let id=0;
class Todo extends React.Component{
    constructor(props){
        super(props);
        this.value = this.props.value;
    }
    render(){
        return(
        <li id={this.props.id} className="todo-list-item" key={this.props.id}>
            <input  className='checkbox' defaultChecked={this.props.isChecked} onClick={this.props.toShowWhetherChecked} type='checkbox' />
            <input  className='text' type='text'defaultValue={this.value} disabled={this.props.isChecked}/>
            <button type='button' className='delete-btn'onClick={this.props.removeFromTodosList}>X</button>
        </li>
        );
    }
}
class TodoList extends React.Component{
    constructor(props){
        super(props);
        //this.dummyState=JSON.parse(window.localStorage.getItem('stateData'));
        //this.state=this.dummyState===null?{listToShow:[],todosList:[],activeList:[],values:[],completedList:[],isChecked:[]}:this.dummyState;
        //id=+window.localStorage.getItem(('id'));
        this.state={listToShow:[],todosList:[],activeList:[],values:[],completedList:[],isChecked:[]}
    }
    addToactiveList=(event)=>{
        let value = event.target.value;
        if(event.keyCode===13 && value!==''){
            this.setState(state => ({
            todosList: [...state.todosList,id],
           activeList: [...state.activeList,id],
           listToShow:[...state.listToShow,id++],
            values:[...state.values,value],
            isChecked:[...state.isChecked,false]
        }));
        event.target.value='';
        }
    }
    removeFromTodosList=(event)=>{
        let removeId = event.target.parentNode.id;
        this.setState(state =>({
            todosList:state.todosList.filter((item)=>item!==removeId),
            activeList:state.activeList.filter((item)=>item!==removeId),
            completedList:state.completedList.filter((item)=>item!==removeId),
            listToShow:state.listToShow.filter((item)=>item!==removeId)
       }));
       
    }
    toShowWhetherChecked=(event)=>{
        let parentId = event.target.parentNode.id;
        this.setState(state=>({
            isChecked:state.isChecked.map((item,index)=>(index===parentId)?!item:item)
        }));
        if(event.target.checked){
            this.setState(state =>({
            activeList:state.activeList.filter((item)=>item!==parentId),
            completedList:[...state.completedList,parentId]
       }));
        }
        else{
            this.setState(state =>({
            activeList:[...state.activeList,parentId],
            completedList:state.completedList.filter((item)=>item!==parentId)
       }));
        }
    }
    showAll=()=>{
        this.setState(state =>({
            listToShow:state.todosList
       }));
    }
    showActive=()=>{
        this.setState(state =>({
            listToShow:state.activeList
       }));
    }
    showCompleted=()=>{
        this.setState(state =>({
            listToShow:state.completedList
       }));
    }
    clearCompleted=()=>{
        this.setState(state=>({
            completedList:[],
            todosList:state.activeList,
            listToShow:state.activeList
        }));
    }
    render(){
        //window.localStorage.setItem('stateData',JSON.stringify(this.state));
        //window.localStorage.setItem('id',JSON.stringify(id));
        return(
        <div className='flexbox'>
        <h1 className='todo-title'>todos</h1>
        <input onKeyDown={this.addToactiveList} type='text' className="text1" placeholder="what needs to be done?" />
            <ul>
              {this.state.listToShow.map((id)=>{
                    return <div><Todo id={id} key={id} value={this.state.values[id]} 
                    isChecked={this.state.isChecked[id]} toShowWhetherChecked={this.toShowWhetherChecked}
                    removeFromTodosList={this.removeFromTodosList}/>
                    </div>;
                 })}
            </ul>
            <div className={this.state.todosList.length<=0?'dont-display':'display'}>
                <span>{this.state.activeList.length} items left</span>
                <div className='todo-list-details'>
                <button onClick={this.showAll} className='all'>all</button>
                <button onClick={this.showActive} className='active'>active</button>
                <button onClick={this.showCompleted} className='completed'>completed</button>
                </div>
                <button className={this.state.completedList.length<=0?'dont-display':'clearCompleted'} onClick={this.clearCompleted}>clear completed</button>
            </div>
        </div>);
    }
}
export default TodoList;