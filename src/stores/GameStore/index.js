import {observable,action,computed} from 'mobx';

import Cell from './Cell';
import gameLevelsData from './gameLevelsData.json';

const animationTime=500;
const numberOfInitialLives=3;
const timeForDisplayHiddenCell=1000;
const timeForGoToIntialLevel=2000;
class GameStore {
    @observable level;
    @observable topLevel;
    @observable currentLevelGridCells;
    @observable selectedCellsCount;
    @observable isGameCompleted;
    @observable timer;
    @observable intialLives;
    @observable currentTime;
    constructor(){
        this.setIntialLevelsOfVariables();
    }
    @action.bound
    setIntialLevelsOfVariables(){
        this.level=0;
        this.topLevel=0;
        this.currentLevelGridCells=[];//[{id,isHidden}]
        this.selectedCellsCount=0;
        this.isGameCompleted=false;
        this.gameLevelsData=gameLevelsData;
        this.timer=0;
        this.intialLives=numberOfInitialLives;
        
    }
    @action.bound
    onCellClick(isHidden,isClickedOnCellGridOnce){
        if(isHidden===true){
            if(isClickedOnCellGridOnce===true){
                    this.incrementSelectedCellsCount();
                }
            }
        else{
            this.checkingLives();
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
            this.goToInitialLevelAndUpdateCells();
            this.setIntialLives();
        }
    }
    @action.bound
    setIntialLives(){
        this.intialLives=numberOfInitialLives;
    }
    @action.bound
    setGridCells(){
        let level=gameLevelsData[this.level].gridSize;
        let GridCells=[];
        for(let i=0;i<level*level;i++){
           GridCells.push(new Cell());
        }
        let hiddenCellCount=gameLevelsData[this.level].hiddenCellCount;
        let GridCellsNumber=GridCells.length;
        for(let i=0;i<hiddenCellCount;++i){
             let index=GridCells[Math.floor(Math.random()*GridCellsNumber)];
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
        let topLevelToBeReached=gameLevelsData.length-1;
        if(this.level===topLevelToBeReached){
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
        this.isGameCompleted=false;
        this.resetSelectedCellsCount();
        this.setGridCells();
        this.setIntialLives();
    }
    
    @action.bound
    setTopLevel(){
        let topLevelToBeReached=gameLevelsData.length-1;
        if(this.level===topLevelToBeReached){
        //if(this.level===1){
            this.topLevel=this.level;
        }
        else{
            (this.level>this.topLevel)?this.topLevel=this.level:this.topLevel=this.topLevel;
        }
    }
    @computed
    get timeToDisplayHiddenCells(){
        let timeToDisplayHiddenCells=this.gameLevelsData[this.level].hiddenCellCount*timeForDisplayHiddenCell;
        return timeToDisplayHiddenCells;
    }
    @computed
    get timeToGoToIntialLevel(){
        let timeToGoToIntialLevel=(this.gameLevelsData[this.level].hiddenCellCount*timeForGoToIntialLevel)+animationTime;
        return timeToGoToIntialLevel;
    }
}
const gameStore=new GameStore();
export default gameStore;