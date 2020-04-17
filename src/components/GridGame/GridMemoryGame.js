import React from 'react';
import {observable} from 'mobx';
import {Provider,observer} from 'mobx-react';

import memoryGamethemeStore from '../../stores/GameTheme/index';
import gameStore from '../../stores/GameStore/index';
import Header from './Header';
import GameField from './GameField';
import GameResult from './GameResult';

import {GameDashboard,Game} from './styledComponents';


@observer
class GridMemoryGame extends React.Component{
    @observable intialGridCells;
    constructor(){
        super();
        this.intialGridCells=gameStore.setGridCells();
        }
    render(){
        gameStore.setTimer();
        const widthByLevel=gameStore.gameLevelsData[gameStore.level].gridWidth;
        const widthByTopLevel=gameStore.gameLevelsData[gameStore.gameLevelsData.length-1].gridWidth;
            return (
        <Game theme={memoryGamethemeStore.getCurrentTheme()}>
             <GameDashboard widthByLevel={widthByLevel} widthByTopLevel={widthByTopLevel} width={gameStore.gameLevelsData[gameStore.level].gridWidth} isGameCompleted={gameStore.isGameCompleted}>
             <Provider gameLevelsData={gameStore.gameLevelsData}>
                <Header level={gameStore.level} topLevel={gameStore.topLevel} theme={memoryGamethemeStore.getCurrentTheme()} onChangeTheme={memoryGamethemeStore.onChangeTheme}/>
                {(gameStore.isGameCompleted)?
                <GameResult level={gameStore.level} topLevel={gameStore.topLevel} onPlayAgainClick={gameStore.onPlayAgainClick}/>:
                <GameField  cells={gameStore.currentLevelGridCells} theme={memoryGamethemeStore.getCurrentTheme()} onCellClick={gameStore.onCellClick} level={gameStore.level}/>}
            </Provider>
            </GameDashboard>
        </Game>
            );
        }
}
export default GridMemoryGame;