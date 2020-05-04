
/*global jest*/
/*global expect*/
/* Mocking js-cookie library */

import {
  API_SUCCESS,
  API_FAILED,
  API_FETCHING,
  API_INITIAL
} from "@ib/api-constants";

import AuthStore from '.';
import AuthService from '../Services';
import getUserSignInResponse from '../fixtures/getUserSignInResponse.json';
describe("AuthStore Tests Cases",()=>{
    let authService;
    let authStore;
    
    beforeEach(()=>{
        authService=new AuthService();
       authStore=new AuthStore(authService);
        
    });
    it("it should intialize the Auth Store ",()=>{
        expect(authStore.getUserSignInAPIStatus).toBe(API_INITIAL);
        expect(authStore.getUserSignInAPIError).toBeNull();
    });
    it("it should test the signInAPI data fetching state ",()=>{
        const mockLoadingPromise = new Promise(function(resolve, reject){});
        const mockSignInAPI = jest.fn();
        mockSignInAPI.mockReturnValue(mockLoadingPromise);
       
       authStore.userSignIn();
       expect(authStore.getUserSignInAPIStatus).toBe(API_FETCHING);
    });
    
    it("it should test the signInAPI data success state",async ()=>{
        const mockLoadingPromise=new Promise(function(resolve,reject){
            resolve(getUserSignInResponse);
        });
        const mockSignInAPI=jest.fn();
        mockSignInAPI.mockReturnValue(mockLoadingPromise);
        authService.signInAPI=mockSignInAPI;
        
        await authStore.userSignIn();
        expect(authStore.getUserSignInAPIStatus).toBe(API_SUCCESS);
    });
    it("it should test the signInAPI failure state",async ()=>{
        const mockLoadingPromise=new Promise((resolve,reject)=>{
            reject(new Error('error'));
        }).catch(() => {});
        const mockSignInAPI=jest.fn();
        mockSignInAPI.mockReturnValue(mockLoadingPromise);
        authService.signInAPI=mockSignInAPI;
        
        await authStore.userSignIn();
        expect(authStore.getUserSignInAPIStatus).toBe(API_FAILED);
    });
    it("it should test the usersignout function",()=>{
        authStore.userSignOut();
        expect(authStore.getUserSignInAPIStatus).toBe(API_INITIAL);
        expect(authStore.getUserSignInAPIError).toBeNull();
    });
});
