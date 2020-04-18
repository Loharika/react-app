import React from 'react';
import {observable,action} from 'mobx';
import {observer,inject} from 'mobx-react';

import Cell from './Cell';
import {GridGameField} from './styledComponents';

@inject("gameLevelsData")
@observer
class GameField extends React.Component{
    @observable timer;
    constructor(props){
        super(props);
        this.timer=0;
    }
    componentDidMount(){
        const {goToInitialLevelAndUpdateCells,checkingLives,timeToGoToIntialLevel}=this.props;
        this.timer=setTimeout(()=>{
                goToInitialLevelAndUpdateCells();
                checkingLives();
            },timeToGoToIntialLevel);
    }
    componentWillUnmount(){
        clearTimeout(this.timer);
    }
    @action.bound
    renderAllGrids(){
        const {cells,onCellClick,gameLevelsData,level,theme,timeToDisplayHiddenCells}=this.props;
        let allGridCells=cells.map(gridCellModel=>{
            return (<Cell gridCellModel={gridCellModel} timeToDisplayHiddenCells={timeToDisplayHiddenCells} hiddenCellCount={gameLevelsData[level].hiddenCellCount} theme={theme}  key={gridCellModel.id}   onCellClick={onCellClick} />);
        });
        return allGridCells;
    }
    render(){
        const {level,gameLevelsData}=this.props;
        return (
            <GridGameField width={gameLevelsData[level].gridWidth} gridColumns={gameLevelsData[level].gridSize}>
                {this.renderAllGrids()}
            </GridGameField>
            );
    }
}
export default GameField;