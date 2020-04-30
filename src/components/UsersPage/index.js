import React,{Component} from 'react';
import {action} from 'mobx';
import {observer,inject} from 'mobx-react';
import LoadingWrapperWithFailure from '../../common/LoadingWrapperWithFailure';
import NoDataView from '../../common/NoDataView';

@inject("usersStore")
@observer
class UsersPage extends Component{
    
    componentDidMount(){
        this.doNetworkCalls();
    }
    @action.bound
    getUsersStore(){
        return this.props.usersStore;
    }
    @action.bound
    doNetworkCalls(){
        this.getUsersStore().getUsers();
    }
    @action.bound
    renderUsersList(){
        const {users}=this.getUsersStore();
        if(users.length===0){
            return <NoDataView />;
        }
        return (
        users.map((userName)=><div key={Math.random()}>{userName}</div>)
        );
    }
    render(){
        const {getUsersApiStatus,getUsersApiError}=this.getUsersStore();
        console.log();
        return (
          <LoadingWrapperWithFailure apiStatus={getUsersApiStatus} apiError={getUsersApiError} 
            onRetryClick={this.doNetworkCalls} renderSuccessUI={this.renderUsersList}
            />
            );
    }
}
export default UsersPage;