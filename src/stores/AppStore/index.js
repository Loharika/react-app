import {observable,action} from 'mobx';
import {bindPromiseWithOnSuccess} from '@ib/mobx-promise';
import {API_INITIAL} from '@ib/api-constants';
import {getAccessToken,setAccessToken,clearUserSession} from "../../utils/StorageUtils";

class AppStore {
    
    @observable getUserLoginInAPIStatus;
    @observable getUserLoginInAPIError;
    @observable authAPIService;
    authService
    constructor(appService){
        this.init();
        this.appService=appService;
    }
    @action.bound
    init(){
        this.getUserLoginInAPIStatus=API_INITIAL;
        this.getUserLoginInAPIError=null;
        this.authAPIService=getAccessToken();
    }
  
        
    @action.bound
    userLogIn(){
        let loginInPromise=this.appService.logInAPI();
        return bindPromiseWithOnSuccess(loginInPromise).
        to(this.setGetUserLoginInAPIStatus,this.setUserLoginInAPIResponse).
        catch(this.setGetUserLoginInAPIError);
        
    }
    
     @action.bound
    setUserLoginInAPIResponse(loginInResponseToken){
        const access_token=loginInResponseToken[0].access_token;
        setAccessToken(access_token+'9VBQS9J3');
        this.authAPIService=getAccessToken();
    }
     @action.bound
    setGetUserLoginInAPIError(apiError){
        this.getUserLoginInAPIError=apiError;
    }
     @action.bound
    setGetUserLoginInAPIStatus(apiStatus){
        this.getUserLoginInAPIStatus=apiStatus;
    }
     @action.bound
    userLogOut(){
        clearUserSession();
        this.init();
    }
}
export default AppStore;