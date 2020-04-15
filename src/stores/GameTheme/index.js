
import {observable} from 'mobx';

import themeStore from '../ThemeStore/index';
class MemoryGameThemeStore {
    @observable selectedTheme
    constructor(){
        this.theme='DARK';
  }
  
  getCurrentTheme=()=>{
      this.theme=themeStore.selectedTheme==='Light Mode'?'LIGHT':'DARK';
      return this.theme;
  }
  setCurrentTheme=(theme)=>{
    themeStore.updateCurrentTheme(theme);
  }
  
  onChangeTheme=()=>{
      selectedTheme:(this.getCurrentTheme()==='Light Mode')?this.setCurrentTheme('Dark Mode'):this.setCurrentTheme('Light Mode');
  }
}
let memoryGamethemeStore=new MemoryGameThemeStore();
export default memoryGamethemeStore;
