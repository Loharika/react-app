import React from 'react';
import {FooterComponent,ParagraphComponentPlay,ParagraphComponent} from '../../styleComponents/styleComponents.js';
function Footer(props){
        return(
            <FooterComponent theme={props.selectedTheme} >
                <ParagraphComponentPlay theme={props.selectedTheme} >How To Play?</ParagraphComponentPlay>
                <ParagraphComponent theme={props.selectedTheme} >Get points by clicking on an image but don't click on any image more than once!</ParagraphComponent>
            </FooterComponent>
            );
}
export default Footer;  