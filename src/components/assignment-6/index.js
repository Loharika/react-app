import React from 'react';
import { observer, inject } from 'mobx-react'

import {CounterAppStyle,CounterTitle,Counter,IncrementButton,DecrementButton,CounterValueDisplay} from
  '../styleComponents/styleComponents.js';
import stores from '../../stores';
const counterStore = stores.counterStore;
@observer
class  CounterApp extends React.Component{
  onIncrement=(event)=>{
      counterStore.incrementCounter();
  }
  onDecrement=(event)=>{
    counterStore.decrementCounter();
  }
  onChangeCount=(event)=>{
      counterStore.setCounterValue(event.target.value);
  }
    getCount=(event)=>{
     return counterStore.count;
    }
  render(){
    let count=this.getCount();
    return (
    <CounterAppStyle >
        <CounterTitle >Counter</CounterTitle>
        <Counter>
          <IncrementButton  onClick={this.onIncrement}>+</IncrementButton>
          <CounterValueDisplay type='number' onChange={this.onChangeCount} value={this.getCount()} />
          <DecrementButton onClick={this.onDecrement}>-</DecrementButton>
        </Counter>
      </CounterAppStyle> 
      );
  }
}
export default CounterApp;