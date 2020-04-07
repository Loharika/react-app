import React from 'react';
import {WinOrLoseComponent,WinOrLoseResult,ButtonComponent,GameScore} from '../../styleComponents/styleComponents.js';
function WinOrLose(props){
    return (
        <WinOrLoseComponent theme={props.selectedTheme}>
        <GameScore gameState={props.gameState} >{props.score}</GameScore>
        <WinOrLoseResult gameState={props.gameState} >You {props.gameState}!</WinOrLoseResult>
        <ButtonComponent onClick={props.onPlayAgainClick}>
            Play Again
        </ButtonComponent>
        </WinOrLoseComponent >);
}
export default WinOrLose;