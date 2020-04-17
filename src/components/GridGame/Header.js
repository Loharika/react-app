import React from 'react';
import {observer} from 'mobx-react';
import {GridGameHeader,ScoreAndThemeStyle,ThemeChangeButtonStyle} from './styledComponents';

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