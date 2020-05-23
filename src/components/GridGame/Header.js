import React from 'react';
import {observer} from 'mobx-react';
import {GridGameHeader,ScoreAndThemeStyle,ThemeChangeButtonStyle} from './styledComponents';


@observer
class ThemeChangeButton extends React.Component{
    render(){
        const {onChangeTheme,theme}=this.props;
        return (
            <ThemeChangeButtonStyle type='button' 
                        onClick={onChangeTheme} theme={theme}>
                        Mode: {theme}</ThemeChangeButtonStyle>
            )
    }
}

@observer
class Header extends React.Component{
    render(){
        const {level,topLevel,theme,onChangeTheme}=this.props;
        return(
            <GridGameHeader theme={theme} >
                <span theme={theme}>Top Level:{topLevel}</span>
                <ScoreAndThemeStyle >
                    <span theme={theme}>Level:{level}</span>
                    <ThemeChangeButton onChangeTheme={onChangeTheme} theme={theme}/>
                    {/*<ThemeChangeButtonStyle type='button' 
                        onClick={onChangeTheme} theme={theme}>
                        Mode: {theme}</ThemeChangeButtonStyle>*/}
                </ScoreAndThemeStyle>
            </GridGameHeader>
            );
    }
        
}
export {Header,ThemeChangeButton};