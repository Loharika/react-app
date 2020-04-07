import React from 'react';
import lightModeIcon from '../assets/light-mode-icon.svg';
import {CountryHeaderComponent,ThemeIcon,HeaderTitle,CountryThemeChangeButton}
    from '../../styleComponents/styleComponents.js';
function Header(props){
        return(
            <CountryHeaderComponent theme={props.selectedTheme} >
                <HeaderTitle className='world'>Where in the World?</HeaderTitle>
                <CountryThemeChangeButton type='button' id='mode'  theme={props.selectedTheme}
                onClick={props.onChangeTheme}>
                <ThemeIcon src={lightModeIcon} alt='light-mode-icon' theme={props.selectedTheme}  />
                {props.selectedTheme}</CountryThemeChangeButton>
            </CountryHeaderComponent>
            );
}
export default Header;