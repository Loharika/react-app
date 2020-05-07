
import React from 'react';
import {observable,action} from 'mobx';
import {observer,inject} from 'mobx-react';
import {withRouter,Redirect } from "react-router-dom";

import SignInForm from '../Components/SignInForm/SignInForm.js';

@inject("authStore")
@observer
class SignInFormRoute extends React.Component{
  @observable userName;
  @observable password;
  @observable displayError;
  @observable displayText;
  @observable isSignInClicked;
  constructor(){
    super();
    this.userName='';
    this.password='';
    this.displayError=false;
    this.displayText='';
    this.isSignInClicked=false;
  }
    onSubmit=()=>{
        let {userName,password,onClickSignInButton}=this;
        
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
            onClickSignInButton();
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
    async onClickSignInButton(){
        let path=window.localStorage.getItem('path');
        this.userName="";
        this.password="";
        const {authStore:{userSignIn}}=this.props;
        await userSignIn();
        this.isSignInClicked=true;
        const {authStore:{authAPIService}}=this.props;
        
        if(authAPIService){
            // const {history}=
           this.props.history.push(path);
            //return (<Redirect to={{pathname:'/ecommerce-store/products/'}}/>);
            
        }
        
    }
    
    render(){
        const {userName,password,onChangeUserName,onChangePassword,displayText,onSubmit,displayError,isSignInClicked}=this;
        return (
            <SignInForm userName={userName} password={password} 
            isSignInClicked={isSignInClicked}  onChangeUserName={onChangeUserName} 
            onChangePassword={onChangePassword} onSubmit={onSubmit} 
            displayError={displayError} displayErrorText={displayText}  />
            );
    }
}
export default withRouter(SignInFormRoute);