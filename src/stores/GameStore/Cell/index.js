import {observable,action} from 'mobx';
class Cell{
    @observable isHidden;
    constructor(){
        this.id=Math.random().toString();
        this.isHidden=false;
        this.isClicked=false;
    }
    @action.bound
    updateIsClicked(){
        this.isClicked=true;
    }
}
export default Cell;