import React from 'react';
import styled from '@emotion/styled';
import tw from 'tailwind.macro';
const GridGameHeader=styled.div`
    ${tw`flex flex-col justify-between items-center px-2 py-3 font-bold`};
    background-color:${props=>
    props.theme==='LIGHT'?'':'#2d3748'};
    color:${props=>
    props.theme==='LIGHT'?'black':'white'};
`;
const ScoreAndThemeStyle=styled.div`
        ${tw`flex w-full justify-between items-center px-3 py-4 font-bold`};
`;
const ThemeChangeButtonStyle=styled.div`
     ${tw`flex font-bold mx-4 my-2 p-2 rounded`};
    border:${props=>
    props.theme==='LIGHT'?'1px solid black':'1px solid white'};
`;
function Header(props){
        return(
            <GridGameHeader theme={props.theme} >
                <span theme={props.theme}>Top Score:{props.topScore}</span>
                <ScoreAndThemeStyle >
                <span theme={props.theme}>Score:{props.score}</span>
                <ThemeChangeButtonStyle type='button' 
                onClick={props.onChangeTheme} theme={props.theme}>
                Mode: {props.theme}</ThemeChangeButtonStyle>
                </ScoreAndThemeStyle>
            </GridGameHeader>
            );
}
export default Header;