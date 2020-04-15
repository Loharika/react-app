import {observable} from 'mobx';
class Cell{
    @observable id;
    @observable isHidden;
    constructor(){
        this.id=Math.random();
        this.isHidden=false;
        this.isClicked=false;
    }
}
export default Cell;