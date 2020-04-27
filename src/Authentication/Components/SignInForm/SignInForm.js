
import React from 'react';
import {observable} from 'mobx';
import {observer} from 'mobx-react';

import authStore from '../../Stores';

import { BrowserRouter as Router, Switch, Route,Redirect } from "react-router-dom";

import {SignInFormStyle,Password,UserName,ErrorStyle,SignInButtonDiv,SignInButton,SignInFormPage} from './styledComponents.js';
@observer
class SignInForm extends React.Component{
  @observable userName;
  @observable password;
  @observable displayError;
  @observable displayText;
  @observable isRedirect;
  constructor(){
    super();
    this.userName='';
    this.password='';
    this.displayError=false;
    this.displayText='';
    this.isRedirect=false;
  }
    onSubmit=()=>{
        authStore.userSignIn();
        if(this.userName.length===0 || this.password.length===0){
            this.displayText='Enter the details';
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
    onClickSignInButton=()=>{
        this.displayError=false;
        const {history}=this.props;
        this.isRedirect=true;
       
    }
    
    render(){
        if(this.isRedirect){
            return (<Redirect to={{pathname:'/e-commerce'}}/>);
        }
        return (
            <SignInFormPage className=" ">
                <SignInFormStyle className="">
                    <UserName onChange={this.onChangeUserName}  type="text" placeholder="Username"/>
                    <Password onChange={this.onChangePassword}  type="password" placeholder="*********"/>
                  {this.displayError?<ErrorStyle >{this.displayText}</ErrorStyle>:''}
                  <SignInButtonDiv>
                    <SignInButton onClick={this.onSubmit} type='button'>
                      Sign In
                    </SignInButton>
                  </SignInButtonDiv>
                </SignInFormStyle>
            </SignInFormPage>
            );
    }
}
export default SignInForm;