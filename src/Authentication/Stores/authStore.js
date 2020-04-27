import {observable,action} from 'mobx';
import {bindPromiseWithOnSuccess} from '@ib/mobx-promise';
import {API_INITIAL} from '@ib/api-constants';

import Cookie from 'js-cookie';

class AuthStore {
    
    @observable getUserSignInAPIStatus;
    @observable getUserSignInAPIError;
    @observable authAPIService;
    authService
    constructor(authService){
        this.init();
        this.authService=authService;
    }
    @action.bound
    init(){
        this.getUserSignInAPIStatus=API_INITIAL;
        this.getUserSignInAPIError=null;
        this.authAPIService={};
    }
  
        
    @action.bound
    userSignIn(){
        let signInPromise=this.authService.signInAPI();
        return bindPromiseWithOnSuccess(signInPromise).
        to(this.setGetUserSignInAPIStatus,this.setUserSignInAPIResponse).
        catch(this.setGetUserSignInAPIError);
        
    }
     @action.bound
    setUserSignInAPIResponse(signInResponseToken){
        this.authAPIService=signInResponseToken[0].access_token;
        
        Cookie.set('access_token', this.authAPIService);
    }
     @action.bound
    setGetUserSignInAPIError(apiError){
        this.getUserSignInAPIError=apiError;
    }
     @action.bound
    setGetUserSignInAPIStatus(apiStatus){
        this.getUserSignInAPIStatus=apiStatus;
    }
     @action.bound
    userSignOut(){
        this.init();
    }
}
export default AuthStore;