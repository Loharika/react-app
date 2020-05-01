import React, { Component } from 'react'
import { observer } from 'mobx-react'

import stores from '../../stores'
const counterStore = stores.counterStore


@observer
class CounterPage extends Component{
  functionCalling

  handleIncrement = () => {
    counterStore.incrementCounter()
  }

  handleDecrement = () => {
    if (counterStore.count !== 0) {
      counterStore.decrementCounter()
    }
  }

  render() {
    return (
      <div style={{width:'100vw',height:'100vh',display:'flex',justifyContent:'center',alignItems:'center'}}>
        <div>
      <h1>Counter</h1>
        <h1 className='m-5' >{counterStore.count}</h1>
        <button className='m-5' onClick={this.handleIncrement}>+</button>
        <button  className='m-5' onClick={this.handleDecrement}>-</button>
        </div>
      </div>
    )
  }
}

export default CounterPage
