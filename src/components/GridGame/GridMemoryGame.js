import React from 'react';
import {observable} from 'mobx';
import {Provider,observer} from 'mobx-react';
import styled from '@emotion/styled';
import tw from 'tailwind.macro';


import memoryGamethemeStore from '../../stores/GameTheme/index';
import gameStore from '../../stores/GameStore/index';
import Header from './Header';
import GameField from './GameField';

const GameDashboard=styled.div`
    ${tw`flex flex-col`}
    align-self:center;
    width:${props=>props.width}px;
`;
const Game=styled.div`
    ${tw`w-screen h-screen flex justify-center items-center`}
    width:${props=>props.width}px;
    background-color:${props=>
    props.theme==='LIGHT'?'':'#2d3748'};
    color:${props=>
    props.theme==='LIGHT'?'black':'white'};
`;
@observer
class GridMemoryGame extends React.Component{
    @observable data;
    constructor(){
        super();
        }
    render(){
        return (
        <Game theme={memoryGamethemeStore.getCurrentTheme()}>
             <GameDashboard width={gameStore.gameLevelsData[gameStore.level].gridWidth}>
             <Provider gameLevelsData={gameStore.gameLevelsData}>
                <Header level={gameStore.level} topLevel={gameStore.topLevel} theme={memoryGamethemeStore.getCurrentTheme()} onChangeTheme={memoryGamethemeStore.onChangeTheme}/>
                <GameField  cells={gameStore.setGridCells()} onCellClick={gameStore.onCellClick} level={gameStore.level}/>
            </Provider>
            </GameDashboard>
        </Game>
            );
       
    }
}
export default GridMemoryGame;