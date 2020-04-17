import React from 'react';
import styled from '@emotion/styled';
import tw from 'tailwind.macro';
import {observer,inject} from 'mobx-react';
import {ButtonComponent,GameScore} from '../styleComponents/styleComponents.js';

const GameResultStyle=styled.span`
    ${tw`my-2 `};
    color:green;
`;
const GameResultPage=styled.span`
    ${tw`flex flex-col justify-around items-center p-4 border-2 border-500-blue`};
    width:${props=>props.width}px;
    height:350px;
`;
@inject("gameLevelsData")
@observer
class GameResult extends React.Component {
        
        render(){
            const {topLevel,onPlayAgainClick,gameLevelsData}=this.props;
            return (
            <GameResultPage width={gameLevelsData[gameLevelsData.length-1].gridWidth}>
            <GameScore>{topLevel}</GameScore>
            <GameResultStyle>Congratulations ! You completed all the Levels.</GameResultStyle>
            <div>
                <ButtonComponent onClick={onPlayAgainClick}>
                    Play Again
                </ButtonComponent>
            </div>
            </GameResultPage>
            );
        }
        
}
export default GameResult;