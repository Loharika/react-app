import React from 'react';
import {observer,inject} from 'mobx-react';

import Cell from './Cell';
import {GridGameField} from './styledComponents';

@inject("gameLevelsData")
@observer
class GameField extends React.Component{
    constructor(props){
        super(props);
    }
    
    renderAllGrids=()=>{
        const {cells,onCellClick,gameLevelsData,level,theme}=this.props;
        let allGridCells=cells.map(gridCellModel=>{
            return (<Cell gridCellModel={gridCellModel} hiddenCellCount={gameLevelsData[level].hiddenCellCount} theme={theme}  key={gridCellModel.id}   onCellClick={onCellClick} />);
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