
import React,{Component}from "react";
import { Link,Redirect } from "react-router-dom";
import {action,observable} from 'mobx';
import {observer,inject} from 'mobx-react';

@inject('appStore')
@observer

class Assignments extends Component{
      @observable isLogOut;
      constructor(){
          super();
          this.isLogOut=false;
      }
      @action.bound
      gotoGridScreenIfLogOut(){
        const {appStore:{userLogOut}}=this.props;
        this.isLogOut=true;
        userLogOut();
      }
    render()
      {
    /*if(this.isLogOut){
        return (
      <Redirect 
      to={{
        pathname:'/'
      }}
      />
      );
    }*/
    const {appStore:{authAPIService}}=this.props;
        if(authAPIService===undefined){
            return (
            <Redirect to={{pathname:'login-form'}}/>
            );
        }
  return (
    <div className='flex w-screen h-screen justify-around border-2'>
          <div className="font-bold flex flex-col justify-center items-center ml-40 text-indigo-900">
                <div className='text-4xl text-blue-500'>Assignments</div>
                <Link to="/car">Car</Link>
                <Link to="/formComponents">Form Components</Link>
                <Link to="/countryDashboard">Country Dashboard</Link>
                <Link to="/emojiGame">Emoji Game</Link>
                <Link to="/counter-app">Counter App</Link>
                <Link to="/todo-app">Todo App</Link>
                <Link to="/mobx-store-todo-app">Mobx Todo App</Link>
                <Link to="/rest-todo-app">Rest Todo App</Link>
                <Link to="/todo-app-api">Todo App API</Link>
                <Link to="/events-app">Events App</Link>
                <Link to="/grid-game">Grid Memory Game</Link>
                <Link to="/user-app">Users App</Link>
                <Link to='/app'>Post App</Link>
                <Link to='/ecommerce-store/products/'>E_Commerce</Link>
          </div>
          <div className='border-2 self-center'>
            <button onClick={this.gotoGridScreenIfLogOut} className="self center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded">
              Log Out
            </button>
          </div>
    </div>
  );
}
}
export default Assignments;

