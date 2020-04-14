import React from "react";
import logo from "../../logo.svg";
import styled from '@emotion/styled';
///** @jsx jsx */
//import { css } from '@emotion/core';

const color = 'white';
    
const PageStyles=styled.div`
height:100vh;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
background-color:black;
color:white;
font-weight:bold;
`;
// writing in div  bg-gray-800 text-white h-screen flex flex-col justify-center items-center
function Page1() {
  /*return (
      <div css={css`
      height:100vh;
      display:flex;
      flex-direction:column;
      justify-content:center;
      align-items:center;
      background-color:black;
      font-weight:bold;
        color: ${color};
    `}>
      <img src={logo} className="App-logo  object-cover" alt="logo" />
      <h1 className='font-bold'>Welcome to React !!</h1>
      </div>
      );*/
  return (
      <PageStyles >
      <img src={logo} className="App-logo  object-cover" alt="logo" />
      <h1 className='font-bold'>Welcome to React !!</h1>
      </PageStyles>
      );
}

export default Page1;
