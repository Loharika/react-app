import React from 'react';
import {observer,inject} from 'mobx-react';
import styled from '@emotion/styled';
import tw from 'tailwind.macro';
const GridGameField=styled.div`
    display:grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    width:${props=>props.width}px;
    gap: 10px;
    padding:20px;
`;
@inject("gameLevelsData")
@observer
class GameField extends React.Component{
    constructor(props){
        super(props);
    }
    renderAllGrids=()=>{
        let id=0;
        const {cells,onCellClick}=this.props;
        let allGrids=cells.map(eachGrid=>{
            return (<div className='p-3 border-2 border-500-blue'key={eachGrid.id} onClick={onCellClick}>{id++}</div>);
        });
        return allGrids;
    }
    render(){
        const {level,gameLevelsData}=this.props;
        return (
            <GridGameField width={gameLevelsData[level].gridWidth}>
            {this.renderAllGrids()}
            </GridGameField>
            );
    }
}
export default GameField;