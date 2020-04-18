import React from 'react';
import {observable,action} from 'mobx';
import {observer} from 'mobx-react';

import { GridCell,WrongCell,DisplayHidden} from './styledComponents';

@observer
class Cell extends React.Component{
    @observable shouldShowHiddenCells;
    @observable isClickedOnCell;
    @observable buttonDisable;
    constructor(props){
        super(props);
        this.shouldShowHiddenCells=true;
        this.isClickedOnCell=false;
        this.buttonDisable=true;
        this.displayisClickedOnCell=300;
    }
    componentDidMount(){
        const {timeToDisplayHiddenCells}=this.props;
        setTimeout(()=>{
            this.shouldShowHiddenCells=false;
            this.buttonDisable=false;
        },timeToDisplayHiddenCells);
        
    }
    
    @action.bound
    onCellClick(cellId,isHidden,isClicked){
        const {onCellClick}=this.props;
        this.isClickedOnCell=true;
        this.buttonDisable=true;
        setTimeout(()=>{
             onCellClick(cellId,isHidden,isClicked);
        },this.displayisClickedOnCell);
           
    }
    render(){
        const {id,isHidden,isClicked}=this.props.gridCellModel;
        const {theme}=this.props;
        const {shouldShowHiddenCells,isClickedOnCell,buttonDisable}=this;
        
        const hiddenCellAnimate=isHidden && (shouldShowHiddenCells || isClickedOnCell);
        const wrongCell=!isHidden && isClickedOnCell;
        const clickingEvent=shouldShowHiddenCells || isClickedOnCell;
        
       return (
           <GridCell disabled={buttonDisable} clickingEvent={clickingEvent} theme={theme} onClick={()=>this.onCellClick(id,isHidden,isClicked)}>
           {!wrongCell?
           <DisplayHidden clickingEvent={clickingEvent} animate={hiddenCellAnimate}  theme={theme} />:
           <WrongCell />}
           </GridCell>
           );
    }
}
export default Cell;






/*

 width:${props=>props.animate?'100%':'0%'};
    height:${props=>props.animate?'100%':'0%'};
    transition:all 0.4s;
    tranform:${props=>props.animate?'scale(1)':'scale(0)'}

<ParentCell>
           <GridCell type='button' disabled={this.buttonDisable} bgColor={this.bgColor} 
           shouldShowHiddenCells={this.shouldShowHiddenCells}  isHidden={isHidden} theme={theme} 
           isClickedOnCell={this.isClickedOnCell} onClick={()=>this.onCellClick(id,isHidden,isClicked)}>{}</GridCell>
           </ParentCell> without animations
import React from 'react';
import {observable,action} from 'mobx';
import {observer} from 'mobx-react';
import styled from '@emotion/styled';
import tw from 'tailwind.macro';
//border-2 border-red-500 border-solid
//border-4 border-pink-500
//    animation:${props=>props.animationStyle?(props.isHidden===true && props.isClickedOnCell===false?'fadeOut':'fadeIn'):''} 3s 1;

const GridCell=styled.button`
    ${tw`p-3 w-full h-full `};
    background-color:${props=>props.bgColor};
    border:none;
@keyframes fadeIn{
  from {
    transform: scale(0);
  }

  to {
    transform: scale(1);
  }
}
@keyframes fadeOut{
from {
    transform: scale(1);
  }

  to {
    transform: scale(0);
  }
}
`;
const ParentCell=styled.div`
    ${tw`w-full h-full `};
    position:relative;
    background-color:#586d8d;
`;
@observer
class Cell extends React.Component{
    @observable shouldShowHiddenCells;
    @observable isClickedOnCell;
    @observable bgColor;
    @observable buttonDisable;
    constructor(props){
        super(props);
        this.shouldShowHiddenCells=true;
        this.isClickedOnCell=false;
        this.buttonDisable=true;
        this.bgColor=(this.props.isHidden===true)?(this.props.theme==='LIGHT'?'#4CAF50':'#bde6f5'):'#586d8d';
    }
    componentDidMount(){
        const {hiddenCellCount}=this.props;
        setTimeout(()=>{
            this.shouldShowHiddenCells=false;
            this.buttonDisable=false;
            this.setBgColor();
        },hiddenCellCount*1000);
        this.setBgColor();
        
    }
    @action.bound
    onCellClick(cellId,isHidden,isClicked){
        const {onCellClick}=this.props;
        this.isClickedOnCell=true;
        this.buttonDisable=true;
        this.setBgColor();
        setTimeout(()=>{
             onCellClick(cellId,isHidden,isClicked);
        },300);
           
    }
    @action.bound
    setBgColor(){
        const {isHidden,theme}=this.props;
        if(this.shouldShowHiddenCells===true)
        {
            this.bgColor=(isHidden===true)?(theme==='LIGHT'?'#4CAF50':'#bde6f5'):'#586d8d';
        }
        else{
            if(this.isClickedOnCell===false){
                if(isHidden===true || isHidden===false){
                    this.bgColor='#586d8d';
                }
            }
            else{
                if(isHidden===true){
                    this.bgColor=(theme==='LIGHT'?'#4CAF50':'#bde6f5');
                }
                else{
                    this.bgColor='red';
                }
                        
            }
        }
    }
    
    render(){
        const {hiddenCellCount,id,isHidden,theme,isClicked}=this.props;
       return (
           <ParentCell>
           <GridCell type='button' disabled={this.buttonDisable} bgColor={this.bgColor} 
           shouldShowHiddenCells={this.shouldShowHiddenCells}  isHidden={isHidden} theme={theme} 
           isClickedOnCell={this.isClickedOnCell} onClick={()=>this.onCellClick(id,isHidden,isClicked)}>{}</GridCell>
           </ParentCell>
           );
    }
}
export default Cell;*/