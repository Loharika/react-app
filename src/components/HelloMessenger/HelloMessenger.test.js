import React,{Component} from 'react';

import {render} from '@testing-library/react';

import {HelloMessage} from '.';

describe('Message Test Cases',()=>{
    it('should return given message',()=>{
        const {getByText,debug}=render(<HelloMessage message={'World'} />);
        getByText(/World/i);
        
        debug();
    });
})