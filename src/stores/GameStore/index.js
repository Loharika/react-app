import {observable,action} from 'mobx';
import Cell from './Cell';
import gameLevelsData from './gameLevelsData.json';
class GameStore {
    @observable level;
    @observable topLevel;
    @observable currentLevelGridCells;
    @observable selectedCellsCount;
    @observable isGameCompleted;
    @observable timer;
    constructor(){
        this.level=0;
        this.topLevel=0;
        this.currentLevelGridCells=[];//[{id,isHidden}]
        this.selectedCellsCount=0;
        this.isGameCompleted=false;
        this.gameLevelsData=gameLevelsData;
        this.timer=0;
    }
    @action.bound
    onCellClick(gridCellId,isHidden){
        if(isHidden===true){
            this.currentLevelGridCells.forEach((each,index) =>{
                if(this.currentLevelGridCells[index].id===gridCellId && index!==14){
                    if(this.currentLevelGridCells[index].isClicked===false){
                        this.currentLevelGridCells[index].isClicked=true;
                        this.incrementSelectedCellsCount();
                    }
                }
            });
        }
        else{
            this.goToInitialLevelAndUpdateCells();
        }
    }
    @action.bound
    setGridCells(){
        
        let level=gameLevelsData[this.level].gridSize;
        let GridCells=[];
        for(let i=0;i<level*level;i++){
           GridCells.push(new Cell());
        }
        
        let hiddenCellCount=gameLevelsData[this.level].hiddenCellCount;
        for(let i=0;i<hiddenCellCount;++i){
             let index=GridCells[Math.floor(Math.random()*GridCells.length)];
             if(!index.isHidden){
                index.isHidden=true;
             }
             else{
                hiddenCellCount++;
             }
        }
        this.currentLevelGridCells=GridCells;
        return this.currentLevelGridCells;
    }
    @action.bound
    setTimer(){
        clearTimeout(this.timer);
            this.timer=setTimeout(()=>{
                this.goToInitialLevelAndUpdateCells();
            },this.gameLevelsData[this.level].hiddenCellCount*2000);
    }
    @action.bound
    goToNextLevelAndUpdateCells(){
        if(this.level===gameLevelsData.length-1){
        //if(this.level===1){
            this.isGameCompleted=true;
            this.setTopLevel();
            this.level=0;
        }
        else if(this.level>=this.topLevel){
            ++this.level;
            
            this.setGridCells();
            
            this.resetSelectedCellsCount();
        }
        else{
            ++this.level;
            
            this.setGridCells();
            
            this.resetSelectedCellsCount();
        }
        
    }
    @action.bound
    goToInitialLevelAndUpdateCells(){
        this.setTopLevel();
        this.level=0;
        this.resetSelectedCellsCount();
        this.setGridCells();
    }
    @action.bound
    resetSelectedCellsCount(){
        this.selectedCellsCount=0;
    }
    @action.bound
    incrementSelectedCellsCount(){
        ++this.selectedCellsCount;
        let hiddenCellCount=gameLevelsData[this.level].hiddenCellCount;
        if(this.selectedCellsCount===hiddenCellCount){
            this.goToNextLevelAndUpdateCells();
        }
    }
    @action.bound
    onPlayAgainClick(){
        this.resetGame();
        this.isGameCompleted=false;
    }
    @action.bound
    resetGame(){
        this.level=0;
        this.topLevel=0;
        this.resetSelectedCellsCount();
        this.setGridCells();
    }
    @action.bound
    setTopLevel(){
        if(this.level===gameLevelsData.length-1){
        //if(this.level===1){
            this.topLevel=this.level;
        }
        else{
            (this.level>this.topLevel)?this.topLevel=this.level:this.topLevel=this.topLevel;
        }
    }
}
const gameStore=new GameStore();
export default gameStore;