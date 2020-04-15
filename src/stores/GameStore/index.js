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
    onCellClick=()=>{
        alert("Clicked");
    }
    @computed
    get setGridCells(){
        let level=gameLevelsData[this.level].gridSize;
        let GridCells=[];
        for(let i=0;i<level*level;i++){
           GridCells.push(new Cell());
        }
        this.currentLevelGridCells=GridCells;
        
        return GridCells;
    }
    goToNextLevelAndUpdateCells=()=>{
        
    }
    goToInitialLevelAndUpdateCells=()=>{
        
    }
    resetSelectedCellsCount=()=>{
    
    }
    incrementSelectedCellsCount=()=>{
        
    }
    onPlayAgainClick=()=>{
        
    }
    resetGame=()=>{
        
    }
    setTopLevel=()=>{
        
    }
}
const gameStore=new GameStore();
export default gameStore;