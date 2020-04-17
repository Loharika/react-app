import React from 'react';
import {observable,action} from 'mobx';
import {Provider,observer} from 'mobx-react';
import styled from '@emotion/styled';
import tw from 'tailwind.macro';


import memoryGamethemeStore from '../../stores/GameTheme/index';
import gameStore from '../../stores/GameStore/index';
import Header from './Header';
import GameField from './GameField';
import GameResult from './GameResult';
const GameDashboard=styled.div`
    ${tw`flex flex-col`}
    align-self:center;
    width:${props=>props.width}px;
    width:${props=>props.isGameCompleted?props.widthByTopLevel:props.widthByLevel}px
`;
const Game=styled.div`
    ${tw`w-screen h-screen flex justify-center items-center`}
    width:${props=>props.width}px;
    background-color:${props=>
    props.theme==='LIGHT'?'':'#313d4e'};
    color:${props=>
    props.theme==='LIGHT'?'black':'white'};
`;
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