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
export default Cell;
/*import React from 'react';
import {observable,action} from 'mobx';
import {observer} from 'mobx-react';
import styled from '@emotion/styled';
import tw from 'tailwind.macro';
const GridCell=styled.div`
    ${tw`p-3`};
  position: relative;
  background-color:${props=>(props.isClickedOnCell===true)?(props.theme==='LIGHT'?'#bde6f5':'#4CAF50'):'#586d8d'};
  animation-delay:10s;
  animation: ${props=>(props.isHidden===true)?(props.theme==='LIGHT'?'lightMode':'darkMode'):''} ${props=>(props.time)}s;
  animation-fill-mode: none;
  
  
}

@keyframes lightMode{
    transform:scale(1);
  from {background-color:#bde6f5}
  to {background-color: #586d8d}
}
@keyframes darkMode{
transform:scale(1);
  from {background-color:#4CAF50}
  to {background-color: #586d8d}
}
`;
@observer
class Cell extends React.Component{
    @observable shouldShowHiddenCells;
    @observable isClickedOnCell;
    constructor(props){
        super(props);
        this.shouldShowHiddenCells=true;
        this.isClickedOnCell=false;
    }
    componentDidMount(){
        setTimeout(()=>{this.shouldShowHiddenCells=false},3000);
    }
    @action.bound
    onCellClick(cellId){
        const {onCellClick}=this.props;
        this.isClickedOnCell=true;
        onCellClick(cellId);
    }
    render(){
        const {isHidden,id,hiddenCellCount,theme}=this.props;
       return (
           <GridCell time={hiddenCellCount}isHidden={isHidden} theme={theme} isClickedOnCell={this.isClickedOnCell} onClick={()=>this.onCellClick(id)}>{}</GridCell>
           );
    }
}
export default Cell;
*/