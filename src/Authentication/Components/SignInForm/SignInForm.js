
import React from 'react';
import {observer} from 'mobx-react';
import {withRouter} from "react-router-dom";
import {SignInFormStyle,Password,UserName,ErrorStyle,SignInButton,SignInFormPage,SignFormTitle} from './styledComponents.js';

@observer
class SignInForm extends React.Component{
    userNameRef=React.createRef();
    componentDidMount(){
        this.userNameRef.current.focus();
    }
    
    
    render(){
        const {userName,password,onChangeUserName,onChangePassword,displayErrorText,onSubmit,displayError,isSignInClicked}=this.props;
        let element=isSignInClicked?<i className="fa fa-spinner fa-spin"></i>:'Sign In';
        return (
            <div>
            
            <SignInFormPage >
                <SignInFormStyle >
                    <SignFormTitle > Sign in</SignFormTitle>
                    <UserName ref={this.userNameRef} value={userName} onChange={onChangeUserName}  type="text" placeholder="Username"/>
                    <Password value={password} onChange={onChangePassword}  type="password" placeholder="Password"/>
                        {displayError?<ErrorStyle >{displayErrorText}</ErrorStyle>:null}
                    <SignInButton onClick={onSubmit} type='button' name="SignIn">
                     {element}
                    </SignInButton>
                </SignInFormStyle>
            </SignInFormPage>
            </div>
            );
    }
}
export default SignInForm;

/*<SignInButton onClick={onSubmit} type='button' name="SignIn">
                     Sign In
                    </SignInButton>*/