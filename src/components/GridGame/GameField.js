import React from 'react';
import {observer,inject} from 'mobx-react';
import styled from '@emotion/styled';
import tw from 'tailwind.macro';
const GridGameField=styled.div`
    display:grid;
    grid-template-columns: repeat(${props=>props.gridColumns},minmax(0, 1fr));
    width:${props=>props.width}px;
    height:${props=>props.width}px;
    gap: 4px;
    padding:20px;
`;
const GridCell=styled.div`
     ${tw`p-3 border-2 border-500-blue`};
     background-color:${props=>props.isHidden===true?'skyblue':'#2d3748'}
`;
@inject("gameLevelsData")
@observer
class GameField extends React.Component{
    constructor(props){
        super(props);
    }
    renderAllGrids=()=>{
        let id=1;
        const {cells,onCellClick}=this.props;
        let allGrids=cells.map(eachGrid=>{
            return (<GridCell isHidden={eachGrid.isHidden} className=''key={eachGrid.id} onClick={()=>onCellClick(eachGrid.id)}>{}</GridCell>);
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