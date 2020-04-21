import React,{Component} from 'react';
import {action} from 'mobx';
import {observer} from 'mobx-react';
import LoadingWrapperWithFailure from '../common/LoadingWrapperWithFailure';
import NoDataView from '../common/NoDataView';
import userStore from '../../stores/UsersStore/index';

@observer
class UsersPage extends Component{
    
    componentDidMount(){
        this.doNetworkCalls();
    }
    @action.bound
    doNetworkCalls(){
        userStore.getUsers();
    }
    @action.bound
    renderUsersList(){
        const {users}=userStore;
        if(users.length===0){
            return <NoDataView />;
        }
        return (
        users.map((userName)=><div key={Math.random()}>{userName}</div>)
        );
    }
    render(){
        const {getUsersApiStatus,getUsersApiError}=userStore;
        console.log();
        return (
          <LoadingWrapperWithFailure apiStatus={getUsersApiStatus} apiError={getUsersApiError} 
            onRetryClick={this.doNetworkCalls} renderSuccessUI={this.renderUsersList}
            />
            );
    }
}
export default UsersPage;