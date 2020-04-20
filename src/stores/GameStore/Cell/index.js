import {observable} from 'mobx';
class Cell{
    @observable isHidden;
    constructor(){
        this.id=Math.random().toString();
        this.isHidden=false;
    }
}
export default Cell;