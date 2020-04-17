import React from 'react';
import {observer} from 'mobx-react';
import styled from '@emotion/styled';
import tw from 'tailwind.macro';
const GridGameHeader=styled.div`
    ${tw`flex flex-col justify-between items-center px-2 py-3 font-bold`};
    background-color:${props=>
    props.theme==='LIGHT'?'':'#313d4e'};
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
@observer
class Header extends React.Component{
    render(){
        const {level,topLevel,theme,onChangeTheme}=this.props;
        return(
            <GridGameHeader theme={theme} >
                <span theme={theme}>Top Level:{topLevel}</span>
                <ScoreAndThemeStyle >
                <span theme={theme}>Level:{level}</span>
                <ThemeChangeButtonStyle type='button' 
                onClick={onChangeTheme} theme={theme}>
                Mode: {theme}</ThemeChangeButtonStyle>
                </ScoreAndThemeStyle>
            </GridGameHeader>
            );
    }
        
}
export default Header;