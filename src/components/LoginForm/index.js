/*global fetch*/
import React from 'react';
import {action,observable} from 'mobx';
import {Redirect } from "react-router-dom";
import {observer} from 'mobx-react';
//https://5e9d2d030fd0b50016f74c36.mockapi.io/todo/loginData
@observer
class LoginForm extends React.Component{
   @observable navigatePath;
    constructor(){
      super();
      this.navigatePath=false;
      this.usersData='';
    }
     async componentDidMount(){
    const response=await fetch("https://5e9d2d030fd0b50016f74c36.mockapi.io/todo/loginData");
    const json=await response.json();
      this.usersData=json;
     }
    @action.bound
    onSubmit(){
        let {history}=this.props;
        history.replace({pathname:'/home'});
        
        this.navigatePath=true;
    }
    render(){
      if(this.navigatePath){
          return (
            <Redirect 
            to={{
              pathname:'/home'
            }}
            />
            );
      }
        return (
          <div className='flex w-screen h-screen justify-center items-center'>
            <div className="w-full max-w-xs ">
  <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
        Username
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"/>
    </div>
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
        Password
      </label>
      <input className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="password"/>
    </div>
    <div className="flex items-center justify-between">
      <button  onClick={this.onSubmit} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Log In
      </button>
      <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
        Forgot Password?
      </a>
    </div>
  </form>
  <p className="text-center text-gray-500 text-xs">
    &copy;2020 Acme Corp. All rights reserved.
  </p>
</div> 
</div>
);
        
    }
}
export default LoginForm;