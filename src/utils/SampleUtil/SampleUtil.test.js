/*global expect*/

import {add} from '.';

describe("add tests",()=>{
    it("should retun sum of two numbers",()=>{
         expect(add(1,2)).toBe(3);
         
         
    });
    it("should not add two strings ",()=>{
        expect(add('1',2)).toBe(null);
    });
    it("should add only first two arguments passed to it",()=>{
        expect(add(1,2,3)).toBe(add(1,2));
    });
})
//