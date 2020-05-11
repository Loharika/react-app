/*global expect*/
import {endpoints} from '.';

describe("endpoints TestCases",()=>{
   it("it should check the all the endpoints",()=>{
       expect(endpoints['signIn']).toEqual("v1/signin/");
       expect(endpoints['verifyOTP']).toEqual("v1/verify-otp/");
       expect(endpoints['resendOTP']).toEqual("v1/resend-otp/");
       expect(endpoints['forgotPassword']).toEqual("v1/forgot-password/");
       expect(endpoints['SIGN_IN_PAGE_PATH']).toEqual('/sign-in/');
   }) 
});