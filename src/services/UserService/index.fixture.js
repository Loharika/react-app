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