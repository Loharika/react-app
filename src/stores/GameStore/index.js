import { observable,computed,action} from 'mobx';
import Cell from './Cell';
import gameLevelsData from './gameLevelsData.json';
class GameStore {
    @observable level;
    @observable topLevel;
    @observable currentLevelGridCells;
    @observable selectedCellsCount;
    @observable isGameCompleted;
    constructor(){
        this.level=0;
        this.topLevel=0;
        this.currentLevelGridCells=[];//[{id,isHidden}]
        this.selectedCellsCount=0;
        this.isGameCompleted=false;
        this.gameLevelsData=gameLevelsData;
    }
    @action.bound
    onCellClick(gridCellId){
        let indexValue;
        this.currentLevelGridCells.forEach((each,index) =>{
            if(this.currentLevelGridCells[index].id===gridCellId){
                indexValue=index;
            }
        }
        );
        if(this.currentLevelGridCells[indexValue].isHidden===true){
            this.incrementSelectedCellsCount(gridCellId);
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
        this.currentLevelGridCells=GridCells;
        //generating the random number of indexes
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
        return GridCells;
    }
    @action.bound
    goToNextLevelAndUpdateCells(){
        //this.topLevel=this.topLevel<this.level?this.level:this.topLevel;
        console.log();
        if(this.level===gameLevelsData.length-1){
            alert("Congrats!");
            this.level=0;
            this.selectedCellsCount=0;
        }
        else if(this.level>=this.topLevel){
            this.topLevel=this.level;
            this.level++;
            this.resetSelectedCellsCount();
        }
        else{
            this.topLevel=this.topLevel;
            this.level++;
            this.resetSelectedCellsCount();
        }
        
    }
    @action.bound
    goToInitialLevelAndUpdateCells(){
        alert("goToInitialLevelAndUpdateCells");
        this.level=0;
        this.selectedCellsCount=0;
    }
    @action.bound
    resetSelectedCellsCount(){
        this.selectedCellsCount=0;
    }
    @action.bound
    incrementSelectedCellsCount(gridCellId){
        let indexValue;
        this.currentLevelGridCells.forEach((each,index) =>{
            if(this.currentLevelGridCells[index].id===gridCellId){
                indexValue=index;
            }
        }
        );
        console.log(this.currentLevelGridCells[indexValue].isClicked);
        if(this.currentLevelGridCells[indexValue].isClicked===false){
            ++this.selectedCellsCount;
            this.currentLevelGridCells[indexValue].isClicked=true;
        }
        let hiddenCellCount=gameLevelsData[this.level].hiddenCellCount;
        if(this.selectedCellsCount===hiddenCellCount){
            this.goToNextLevelAndUpdateCells();
        }
    }
    @action.bound
    onPlayAgainClick(){
        
    }
    @action.bound
    resetGame(){
        
    }
    @action.bound
    setTopLevel(){
        
    }
}
const gameStore=new GameStore();
export default gameStore;