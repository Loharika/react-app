
import React from 'react';
import {observable,action} from 'mobx';
import {observer,inject} from 'mobx-react';
import {withRouter } from "react-router-dom";

import {SignInFormStyle,Password,UserName,ErrorStyle,SignInButton,SignInFormPage,SignFormTitle} from './styledComponents.js';

@inject("authStore")
@observer
class SignInForm extends React.Component{
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
            this.onClickSignInButton();
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
        this.userName="";
        this.password="";
        this.isSignInClicked=true;
        const {authStore:{userSignIn}}=this.props;
        await userSignIn();
        const {authStore:{authAPIService}}=this.props;
        if(authAPIService){
            const {history}=this.props;
            history.replace('/ecommerce-store/products/');
        }
        
    }
    
    render(){
        const {userName,password,onChangeUserName,onChangePassword,displayText,onSubmit,displayError}=this;
        let element=this.isSignInClicked?<i className="fa fa-spinner fa-spin"></i>:'Sign In';
        return (
            <SignInFormPage >
                <SignInFormStyle >
                    <SignFormTitle > Sign in</SignFormTitle>
                    <UserName value={userName} onChange={onChangeUserName}  type="text" placeholder="  Username"/>
                    <Password value={password} onChange={onChangePassword}  type="password" placeholder="  Password"/>
                        {displayError?<ErrorStyle >{displayText}</ErrorStyle>:''}
                    <SignInButton onClick={onSubmit} type='button'>
                     {element}
                    </SignInButton>
                </SignInFormStyle>
            </SignInFormPage>
            );
    }
}
export default withRouter(SignInForm);