
import React from 'react';
import {observer} from 'mobx-react';

import {SignInFormStyle,Password,UserName,ErrorStyle,SignInButton,SignInFormPage,SignFormTitle} from './styledComponents.js';

@observer
class SignInForm extends React.Component{
    render(){
        const {userName,password,onChangeUserName,onChangePassword,displayErrorText,onSubmit,displayError,isSignInClicked}=this.props;
        let element=isSignInClicked?<i className="fa fa-spinner fa-spin"></i>:'Sign In';
        return (
            <SignInFormPage >
                <SignInFormStyle >
                    <SignFormTitle > Sign in</SignFormTitle>
                    <UserName value={userName} onChange={onChangeUserName}  type="text" placeholder="Username"/>
                    <Password value={password} onChange={onChangePassword}  type="password" placeholder="Password"/>
                        {displayError?<ErrorStyle >{displayErrorText}</ErrorStyle>:''}
                    <SignInButton onClick={onSubmit} type='button' name="SignIn">
                     {element}
                    </SignInButton>
                </SignInFormStyle>
            </SignInFormPage>
            );
    }
}
export default SignInForm;