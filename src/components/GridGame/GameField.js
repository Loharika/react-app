import React from 'react';
import {observer,inject} from 'mobx-react';
import styled from '@emotion/styled';
import Cell from './Cell';
const GridGameField=styled.div`
    display:grid;
    grid-template-columns: repeat(${props=>props.gridColumns},minmax(0, 1fr));
    width:${props=>props.width}px;
    height:${props=>props.width}px;
    gap: 7px;
    padding:20px;
`;
@inject("gameLevelsData")
@observer
class GameField extends React.Component{
    constructor(props){
        super(props);
    }
    
    renderAllGrids=()=>{
        const {cells,onCellClick,gameLevelsData,level,theme}=this.props;
        let allGrids=cells.map(eachGrid=>{
           return (<Cell hiddenCellCount={gameLevelsData[level].hiddenCellCount}theme={theme} isHidden={eachGrid.isHidden} key={eachGrid.id}  isClicked={eachGrid.isClicked} id={eachGrid.id} onCellClick={onCellClick} />);
        });
        return allGrids;
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