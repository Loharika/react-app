import {action} from 'mobx';
import {create} from 'apisauce';
import {networkCallWithApisauce} from '../../utils/APIUtils';
import {apiMethods} from '../../constants/APIConstants';
class UserService{
    api;
    constructor(){
         this.api=create({
            baseURL:'https://jsonplaceholder.typicode.com/',
         });
    }
    @action.bound
    getUsersAPI(){
        const usersPromise=networkCallWithApisauce(
            this.api,
            'users/',
            {},
            apiMethods.get
            );
            return usersPromise;
    }
   
}
export default UserService;
/*
import {action} from 'mobx';
import usersResponse from '../../fixtures/getUsersResponse.json';
class UserFixtureService{
    @action.bound
    getUsersAPI(){
       return new Promise((resolve,reject)=>{
           resolve(usersResponse);
       });
    }
   
}
export default UserFixtureService;
*/