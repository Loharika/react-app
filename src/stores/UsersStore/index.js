/*global fetch*/
import {observable,action} from 'mobx';
import {API_INITIAL,API_FETCHING,API_FAILED,API_SUCCESS} from '@ib/api-constants';
import {bindPromiseWithOnSuccess} from '@ib/mobx-promise';

import UserService from '../../services/UserService/index.fixture';
class UsersStore{
    @observable getUsersApiStatus
    @observable getUsersApiError
    @observable users
    userService
    constructor(userService){
         this.userService=userService;
        this.init();
       
    }
    @action.bound
    init(){
        this.getUsersApiStatus=API_INITIAL;
        this.getUsersApiError=null;
        this.users=[];
    }
    @action.bound
    clearStore(){
        this.init();
    }
    @action.bound
    getUsers(){
        const usersPromise=this.userService.getUsersAPI();
        return bindPromiseWithOnSuccess(usersPromise)
        .to(this.setUsersAPIStatus,this.setUsersAPIResponse)
        .catch(this.setUsersAPIError);
    }
     @action.bound
    setUsersAPIResponse(usersResponse){
        
        this.users=usersResponse.map((user)=>user.name);
    }
    @action.bound
    setUsersAPIError(error){
       
        this.getUsersApiError=error;
    }
    @action.bound
    setUsersAPIStatus(apiStatus){
        this.getUsersApiStatus=apiStatus;
    }
    
}
export default UsersStore;
/*const userService=new UserService();
const userStore=new UsersStore(userService);
export default userStore;


/*global fetch
import {observable,action} from 'mobx';
import {API_INITIAL,API_FETCHING,API_FAILED,API_SUCCESS} from '@ib/api-constants';
import {bindPromiseWithOnSuccess} from '@ib/mobx-promise';
import {create} from 'apisauce';
import {networkCallWithApisauce} from '../../utils/APIUtils';
import {apiMethods} from '../../constants/APIConstants';
class UsersStore{
    @observable getUsersApiStatus
    @observable getUsersApiError
    @observable users
    constuctor(){
        this.init();
    }
    @action.bound
    init(){
        this.getUsersApiStatus=API_INITIAL;
        this.getUsersApiError=null;
        this.users=[];
    }
    @action.bound
    clearStore(){
        this.init();
    }
    @action.bound
    getUsers(){
        const api=create({
            baseURL:'https://jsonplaceholder.typicode.com/',
            //headers:{}, if we want we can
            //type:{}
            
        });
        //1.api
        //2.endingpoint as we are doing users here
        const usersPromise=networkCallWithApisauce(api,'users/',{},apiMethods.get);
        return bindPromiseWithOnSuccess(usersPromise)
        .to(this.setUsersAPIStatus,this.setUsersAPIResponse)
        .catch(this.setUsersAPIError);
        
        
        /*const usersPromise=fetch('https://jsonplaceholder.typicode.com/users');2
        return bindPromiseWithOnSuccess(usersPromise)
        .to(this.setUsersAPIStatus,this.setUsersAPIResponse)
        .catch(this.setUsersAPIError);*/
        
        /*this.getUsersApiStatus=API_FETCHING;1
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(this.setUsersAPIResponse)
        .catch(this.setUsersAPIError);
    }
     @action.bound
    setUsersAPIResponse(usersResponse){
        
        this.users=usersResponse.map((user)=>user.name);
        //this.getUsersApiStatus=API_SUCCESS;1
    }
    @action.bound
    setUsersAPIError(error){
       
        this.getUsersApiError=error;
        //this.getUsersApiStatus=API_FAILED;1
    }
    @action.bound
    setUsersAPIStatus(apiStatus){
        this.getUsersApiStatus=apiStatus;
    }
    
}
const userStore=new UsersStore;
export default userStore;*/