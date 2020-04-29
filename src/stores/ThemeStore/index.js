import {observable} from 'mobx';

class ThemeStore{
    @observable selectedTheme
    constructor(){
        this.selectedTheme='Light Mode';
    }
    
    updateCurrentTheme=()=>{
        this.selectedTheme==='Light Mode'?(this.selectedTheme='Dark Mode'):(this.selectedTheme='Light Mode');
    }
}
let themeStore=new ThemeStore();
export default themeStore;
