import {observable,action,computed} from 'mobx';

import Cell from './Cell';
import gameLevelsData from './gameLevelsData.json';

class GameStore {
    @observable level;
    @observable topLevel;
    @observable currentLevelGridCells;
    @observable selectedCellsCount;
    @observable isGameCompleted;
    @observable timer;
    @observable intialLives;
    constructor(){
        this.level=0;
        this.topLevel=0;
        this.currentLevelGridCells=[];//[{id,isHidden}]
        this.selectedCellsCount=0;
        this.isGameCompleted=false;
        this.gameLevelsData=gameLevelsData;
        this.timer=0;
        this.intialLives=3;
    }
    
    @action.bound
    onCellClick(gridCellId,isHidden){
        if(isHidden===true){
            this.currentLevelGridCells.forEach((each,index) =>{
                if(this.currentLevelGridCells[index].id===gridCellId){
                    if(this.currentLevelGridCells[index].isClicked===false){
                        this.currentLevelGridCells[index].isClicked=true;
                        this.incrementSelectedCellsCount();
                    }
                }
            });
        }
        else{
            this.checkingLives();
            //this.goToInitialLevelAndUpdateCells();
        }
    }
    @action.bound
    checkingLives(){
        --this.intialLives;
        if(this.intialLives!==0){
            this.resetSelectedCellsCount();
            this.level=this.level;
        }
        else{
            this.setIntialLives();
            this.goToInitialLevelAndUpdateCells();
        }
    }
    @action.bound
    setIntialLives(){
        this.intialLives=3;
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
            
            this.setIntialLives();
            
            this.setGridCells();
            
            this.resetSelectedCellsCount();
        }
        else{
            ++this.level;
            
            this.setIntialLives();
            
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
        this.setIntialLives();
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
    @computed
    get timeToDisplayHiddenCells(){
        let timeToDisplayHiddenCells=this.gameLevelsData[this.level].hiddenCellCount*1000;
        return timeToDisplayHiddenCells;
    }
    @computed
    get timeToGoToIntialLevel(){
        let timeToGoToIntialLevel=this.gameLevelsData[this.level].hiddenCellCount*2000;
        return timeToGoToIntialLevel;
    }
}
const gameStore=new GameStore();
export default gameStore;