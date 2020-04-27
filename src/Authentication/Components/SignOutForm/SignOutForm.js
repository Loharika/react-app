
import React from 'react';
import {action} from 'mobx';

class SignOutForm extends React.Component{
    @action.bound
    onClickSignOutButton(){
        const {history}=this.props;
        history.replace('/');
    }
    render(){
        return (
      <button onClick={this.onClickSignOutButton} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Sign Out
      </button>
            
            );
    }
}
export default SignOutForm;
