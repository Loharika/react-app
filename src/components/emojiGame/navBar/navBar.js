import React from 'react';
import {HeaderComponent,ThemeChangeButton
    ,SpanComponent,ScoreBoardComponent,SpanComponentForTitle} from '../../styleComponents/styleComponents.js';
function NavBar(props){
        return(
            <HeaderComponent theme={props.selectedTheme} >
                <SpanComponentForTitle theme={props.selectedTheme} >Emoji Game</SpanComponentForTitle>
                <ScoreBoardComponent >
                <SpanComponent theme={props.selectedTheme}>Score:{props.score}</SpanComponent>
                <SpanComponent theme={props.selectedTheme}>Top Score:{props.topScore}</SpanComponent>
                <ThemeChangeButton type='button' 
                onClick={props.onChangeTheme} theme={props.selectedTheme}>
                {props.selectedTheme}</ThemeChangeButton>
                </ScoreBoardComponent>
            </HeaderComponent>
            );
}
export default NavBar;