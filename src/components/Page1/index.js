import React from "react";
import logo from "../../logo.svg";
import styled from '@emotion/styled';
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
function Page1() {
  return (
      <PageStyles >
      <img src={logo} className="App-logo  object-cover" alt="logo" />
      <h1 className='font-bold'>Welcome to React !!</h1>
      </PageStyles>
      );
}

export default Page1;
