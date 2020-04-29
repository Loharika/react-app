
import React from 'react';
import {action,observable} from 'mobx';
import {Redirect,withRouter } from "react-router-dom";
import {observer,inject} from 'mobx-react';

@inject('appStore')
@observer
class LoginForm extends React.Component{
    @observable userName;
    @observable password;
    @observable displayError;
    @observable displayText;
    @observable isSignInClicked;
    @observable navigatePath;
    constructor(){
      super();
      this.navigatePath=false;
      this.usersData='';
      this.userName='';
      this.password='';
      this.displayError=false;
      this.displayText='';
      this.isSignInClicked=false;
    }
    @action.bound
    onSubmit(){
        let {history}=this.props;
        let {displayText,displayError,userName,password}=this;
        if(userName.length===0 && password.length===0){
            this.displayText='Enter the details';
            this.displayError=true;
           
        }
        else if(userName.length===0 ){
            this.displayText='Please enter username';
            this.displayError=true;
            
        }
        
        else if(this.password.length===0 ){
            this.displayText='Please enter password';
            this.displayError=true;
            
        }
        else{
            this.displayError=false;
            //history.replace({pathname:'/assignments'});
            //this.navigatePath=true;
            this.onClickLoginInButton();
        }
    }
     onChangeUserName=(event)=>{
        this.userName=event.target.value;
        this.displayError=false;
    }
    onChangePassword=(event)=>{
        this.password=event.target.value;
        this.displayError=false;
    }
    @action.bound
    async onClickLoginInButton(){
        
        const {appStore:{userLogIn}}=this.props;
        await userLogIn();
        const {appStore:{authAPIService}}=this.props;
        if(authAPIService){
            const {history}=this.props;
            history.replace('/assignments');
        }
        this.userName="";
        this.password="";
        
    }
    render(){
      const {userName,password,onChangeUserName,onChangePassword,onSubmit,displayError,displayText}=this;
      if(this.navigatePath){
          return (
            <Redirect 
            to={{
              pathname:'/assignments'
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
                    <input value={userName} onChange={onChangeUserName}className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"/>
                  </div>
                  <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                      Password
                    </label>
                    <input value={password} onChange={onChangePassword}className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="password"/>
                  </div>
                  {displayError?<p className='text-red-500 '>{displayText}</p>:''}
                  <div className="flex items-center justify-between">
                    <button  onClick={onSubmit} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
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
export default withRouter(LoginForm);