import { observable, action } from 'mobx'

class CounterStore {
   @observable count = 0

   @action
   incrementCounter() {
      this.count = this.count + 1
   }
   @action
   getCount(){
      return this.count;
   }
   @action
   decrementCounter() {
      this.count = this.count - 1
   }
   @action
   setCounterValue(value){
         this.count=+(value);
}
}
export default CounterStore;