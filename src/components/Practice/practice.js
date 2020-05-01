


import React,{Component} from 'react';
import {observable} from 'mobx';


class HelloMessage extends React.Component{
    render(){
        return (<div>{this.props.message}</div>);
    }
}




class UpperInput extends React.Component {
  state = {upper: ''}
    @observable upper
  onUpperChange = e => {
    this.upper= e.target.value.toUpperCase();
  }

  render() {
    return (
      <div>
        <label htmlFor="upper">Upper</label>
        <input
          id="upper"
          value={this.upper}
          onChange={this.onUpperChange}
        />
      </div>
    )
  }
}
export {HelloMessage}


<HelloMessage message='world'/>;

/*import React from 'react';

export default class FadeApp extends React.Component {
constructor(){
    super();
    this.state={
        value:'',
    }
}
add=(v)=> {
 alert(v);   
}


render() {
    let value;
    if(this.state.value){
        value="enabled";
    }
    else{
        value="disabled";
    }
    return (
        <div className="add-item">
            <input onChange={e => this.setState({ value: e.target.value })} value={this.state.value} />
                <button type='button' disabled={!this.state.value} style={{backgroundColor:'skyblue'}} onClick={()=>this.add(value)}>Click me</button>
        </div>
    );
}

}*/

/*import React from 'react';
import styled from  '@emotion/styled';

const Fade = styled.div`
  ${props => props.out ?
    `display: none;`
   : `display: inline-block;`
   }
  animation: ${props => props.out ? 'fadeOut' : 'fadeIn'} 1s linear 10;
  @keyframes fadeIn{
  from {
    transform: scale(.25);
    opacity: 0;
  }

  to {
    transform: scale(1);
    opacity: 1;
  }
  }
@keyframes fadeOut{
  from {
    transform: scale(1);
    opacity: 0;
  }

  to {
    transform: scale(.25);
    opacity: 1;
  }
}
`;
function FadeApp() {
  return (
    <div className='w-screen h-screen flex justify-center items-center text-3xl'>
      <Fade>&lt;💅test&gt;</Fade>
    </div>
  );
}

export default FadeApp;

/*import React from 'react'
let state=0;
class Practice extends React.Component{
    state={
        count:0
    }
    onIncrement=()=>{
        this.setState({count:this.state.count+1});
        console.log('First log',this.state.count);
        this.setState({count:this.state.count+1});
        console.log('Second log',this.state.count);
        this.setState({count:this.state.count+1});
        console.log('Third log',this.state.count);
        }
    /*onIncrementWithSetStateAsFunction=()=>{
        this.setState(prestate=>{
            count:prestate.count+1
        })
        this.setState(prestate=>{
            count:prestate.count+1
        })
        this.setState(prestate=>{
            count:prestate.count+1
        })
        console.log('Last log',this.state.count);
    }
    render(){
    return (
        <div>
    <button type='button' onClick={this.onIncrement}>Click on button1</button>
    </div>
    );
    }
    
    
}
//export {CarList,Car};
export default Practice;
*/
/*class ChildCounter extends React.Component{
    state={
        childCounter1:0,
        childCounter2:0
    }
    onIncrement=()=>{
        this.props.onParentCounterIncrement();
        this.setState({
            childCounter1:this.state.childCounter1+1
        })
    }
    render(){
        console.log('ChildCounter Called');
        return ' ';
    }
}
class ParentCounter extends React.Component{
    state={
        parentCounter:0
    }
    onParentCounterIncrement=()=>{
        this.setState({
            parentCounter1:this.state.parentCounter+1
        })
    }
    render(){
        console.log('ParentCounter Called')
        return (
            <ChildCounter 
            onParentCounterIncrement={this.onParentCounterIncrement}
            parentCounter={this.state.parentCounter}
            />
            );
    }
}
export default ParentCounter;*/
/*import React,{Component} from 'react';
import {action} from 'mobx';
import {create} from 'apisauce';
import {networkCallWithApisauce} from '../../utils/APIUtils';
import {apiMethods} from '../../constants/APIConstants';
import {bindPromiseWithOnSuccess} from '@ib/mobx-promise';
class TodoService{
    api;
    constructor(){
        this.api=create({
            baseURL:'https://5e6864ded426c00016b7cfce.mockapi.io/api/v1/'
        });
    }
    @action.bound
    postTodoAPI(){
        let todoObject=
            {'id':Math.random(),
            'title':'Loharika',
            'isCompleted':true,};
        return (networkCallWithApisauce(
            this.api,
            'users123/',
            todoObject,
            apiMethods.post
        ));
    }
    @action.bound
    getPosted(response){
        console.log(response);
    }
    @action.bound
    getTodosAPI(){
        return (networkCallWithApisauce(
            this.api,
            'users123/',
            {},
            apiMethods.get
        ));
    }
    
}
let todoService=new TodoService();
        

class LocalApp extends Component{
    postTheObject=()=>{
        //alert("post");
        todoService.postTodoAPI();
        this.getTheObjectData();
    }
    getTheObjectData=()=>{
        //alert("getting the data");
        const todosPromise=todoService.getTodosAPI();
        return bindPromiseWithOnSuccess(todosPromise)
        .to(this.setGetTodoListAPIStatus,this.setTodoListResponse)
        .catch(this.setGetTodoListAPIError);
    }
    setGetTodoListAPIStatus=(apiStatus)=>{
        //this.getTodoListAPIStatus=apiStatus;
    }
     setTodoListResponse=(todosResponse)=>{
         let DataArray=[];
        console.log(todosResponse);
        DataArray=todosResponse.map(todo=>{
            return JSON.parse(JSON.parse(todo.data));
        });
        console.log(DataArray);
    }
    setGetTodoListAPIError=(error)=>{
        //this.getTodoListAPIError=error;
    }
    render(){
        return (
            <div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-5" onClick={this.postTheObject}>
            Click to post the Object
        </button>

        </div>
            )
        
    }
}
export default LocalApp;
*/