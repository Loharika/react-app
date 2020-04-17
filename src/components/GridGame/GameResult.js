import React from 'react';
import {observer,inject} from 'mobx-react';

import {ButtonComponent,GameScore} from '../styleComponents/styleComponents.js';
import {GameResultStyle,GameResultPage} from './styledComponents';

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