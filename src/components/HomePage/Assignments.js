
import React,{Component}from "react";
import { Link,Redirect } from "react-router-dom";
import {action,observable} from 'mobx';
import {observer,inject} from 'mobx-react';

@inject('authStore')
@observer

class Assignments extends Component{
      @observable isLogOut;
      constructor(){
          super();
          this.isLogOut=false;
      }
      @action.bound
      gotoGridScreenIfLogOut(){
        this.isLogOut=true;
      }
    render()
      {
    if(this.isLogOut){
      const {authStore:{userSignOut}}=this.props;
      userSignOut();
        return (
      <Redirect 
      to={{
        pathname:'/'
      }}
      />
      );
    }
  return (
    <div className='flex w-screen h-screen justify-around border-2'>
          <div className="font-bold flex flex-col justify-center items-center ml-40 text-indigo-900">
                <div className='text-4xl text-blue-500'>Assignments</div>
                <Link to='/sample'>Sample</Link>
                <Link to='/practice-advanced-concepts'>Practice Advanced Concepts</Link>
                <Link to="/car">Car</Link>
                <Link to="/formComponents">Form Components</Link>
                <Link to="/countryDashboard">Country Dashboard</Link>
                <Link to="/emojiGame">Emoji Game</Link>
                <Link to="/counter-app">Counter App</Link>
                <Link to="/todo-app">Todo App</Link>
                <Link to="/mobx-store-todo-app">Mobx Todo App</Link>
                <Link to="/todo-app-api">Todo App API</Link>
                <Link to="/grid-game">Grid Memory Game</Link>
                <Link to="/user-app">Users App</Link>
                <Link to='/ecommerce-store/products/'>E_Commerce</Link>
          </div>
          <div className='border-2 self-center'>
            <button onClick={this.gotoGridScreenIfLogOut} className="self center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded">
              Sign Out
            </button>
          </div>
    </div>
  );
}
}
export default Assignments;

