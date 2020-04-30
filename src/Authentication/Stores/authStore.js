import {observable,action} from 'mobx';
import {bindPromiseWithOnSuccess} from '@ib/mobx-promise';
import {API_INITIAL} from '@ib/api-constants';
import {getAccessToken,setAccessToken,clearUserSession} from "../../utils/StorageUtils";

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
        this.authAPIService=getAccessToken();
        //alert(this.authAPIService);
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
        const access_token=signInResponseToken[0].access_token;
        setAccessToken(access_token);
        this.authAPIService=getAccessToken();
        //alert(this.authAPIService);
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
        //alert("signOut");
        clearUserSession();
        this.init();
        //alert("cleared");
    }
}
export default AuthStore;