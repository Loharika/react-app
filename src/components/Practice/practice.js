import React from "react";
import { action } from "mobx";
class CounterParent extends React.Component{
      constructor(props) {
        super(props);
    
        this.state = {message:"initial message"};
    }
    @action
    componentDidMount() {
        this.setState((prevState, props) => {
          
          return {message: prevState.message + '!+++'};
        });
        this.setState((prevState, props) => {
        
          return {message: prevState.message + '!---'};
        });
     }
     render(){
      
       return <div>Message:{this.state.message}</div>;
     }
  }
export default CounterParent;
/*import React from "react";
import { render } from "react-dom";
import { observer } from "mobx-react";
import { observable, action } from "mobx";
@observer
class CounterParent extends React.Component {
  @observable parentCounter = 0;

  @action.bound
  onParentCounterIncrement() {
    this.parentCounter += 1;
  }

  render() {
    console.log("render CounterParent"+"   "+this.parentCounter);
    return (
      <CounterChild
        onParentCounterIncrement={this.onParentCounterIncrement}
        parentCounter={this.parentCounter}
      />
    );
  }
}

@observer
class CounterChild extends React.Component {
  @observable childCounter1 = 0;
  @observable childCounter2 = 0;

  
  onIncrement=()=> {
    const { onParentCounterIncrement } = this.props;

    onParentCounterIncrement();
    onParentCounterIncrement();

    this.childCounter1 += 3;
  }

  render() {
    console.log("render CounterChild");
    const { parentCounter } = this.props;

    return (
      <div>
        <button onClick={this.onIncrement}>Increment</button>
        <div>parentCounter: {parentCounter}</div>
        <div>childCounter1: {this.childCounter1}</div>
        <div>childCounter2: {this.childCounter2}</div>
      </div>
    );
  }
}

export default CounterParent;
*/
/*import React, { Component } from "react";
import { render } from "react-dom";
import { observable, action } from "mobx";
import { observer } from "mobx-react";

@observer
class CounterParent extends Component {
  @observable count = 34;
  @observable isCountChanged = false;

  @action.bound
  onChangeCount() {
    this.isCountChanged = true;
    this.count = this.count + 13;

    const promise = new Promise((resolve, reject) => {
      console.log("Before resolve log");
      resolve("Success");
      console.log("After resolve log");
    });
    console.log("Before promise then log");
    promise.then(() => {
      console.log("asdfghjkertyuio");
      this.isCountChanged = false;
    });
  }

  render() {
    console.log("render Counter"+"    "+this.isCountChanged);
    return (
      <div>
        <p>Count: {this.count}</p>
        <button onClick={this.onChangeCount}>Change count</button>
        <p>{this.isCountChanged ? "Count Changed" : ""}</p>
      </div>
    );
  }
}

export default CounterParent;
*/
/*import React from "react";
import { render } from "react-dom";
import { observer } from "mobx-react";
import { observable, action } from "mobx";

@observer
class CounterParent extends React.Component {
  @observable parentCounter = 2;

  @action.bound
  onParentCounterIncrement() {
    this.parentCounter += 0;
  }

  render() {
    console.log("render CounterParent");
    return (
      <CounterChild
        onParentCounterIncrement={this.onParentCounterIncrement}
        parentCounter={this.parentCounter}
      />
    );
  }
}

@observer
class CounterChild extends React.Component {
  @observable childCounter1 = 30;
  @observable childCounter2 = 4;

  
  onIncrement=()=> {
    const { onParentCounterIncrement } = this.props;
    onParentCounterIncrement();
    this.childCounter1 += 3;
    this.childCounter2 += 4;
  }

  render() {
    console.log("render CounterChild");
    const { parentCounter } = this.props;

    return (
      <div>
        <button onClick={this.onIncrement}>Increment</button>
        <div>parentCounter: {parentCounter}</div>
        <div>childCounter1: {this.childCounter1}</div>
        <div>childCounter2: {this.childCounter2}</div>
      </div>
    );
  }
}

export default CounterParent;

*/

/*import React, { Component } from "react";
import { render } from "react-dom";
import { observable, action } from "mobx";
import { observer } from "mobx-react";

@observer
class CounterParent extends Component {
  @observable count = 44;
  @observable isCountChanged = false;

  @action.bound
  onChangeCount() {
    this.count = this.count /2;
    setTimeout(() => {
      this.isCountChanged = true;
      this.count = this.count / 5;
    }, 3000);
    console.log("dfghjklertyuiop");
  }

  render() {
    console.log("render Counter");
    return (
      <div>
        <p>Count: {this.count}</p>
        <button onClick={this.onChangeCount}>Change count</button>
        <p>{this.isCountChanged ? "Count Changed" : ""}</p>
      </div>
    );
  }
}

export default CounterParent;
*/

/*import React, { Component } from "react";
import { render } from "react-dom";
import { observable, computed,action } from "mobx";
import { observer } from "mobx-react";

@observer
class CounterParent extends Component {
  @observable firstCounter = 0;
  @observable secondCounter = 0;

  @computed
  get displayFirstCounterAndSecondCounter() {
    
    console.log("computed value"+"   "+this.firstCounter+"   "+this.secondCounter);
    return `${this.firstCounter} ${this.secondCounter}`;
  }
  //@action.bound
  onChangeFirstAndSecondCount=()=> {
    this.firstCounter = this.firstCounter + 1;
    this.secondCounter = this.secondCounter + 10;
  };

  render() {
    return (
      <div>
        <p>
          Counter display string: {this.displayFirstCounterAndSecondCounter}
        </p>
        <button onClick={this.onChangeFirstAndSecondCount}>
          Change counters
        </button>
      </div>
    );
  }
}

export default CounterParent;
*/

/*import { observable, action, computed, autorun } from "mobx";

class Person {
  @observable initial = "P";
  @observable firstName = "John";
  @observable lastName = "Grisham";

  @action
  setFirstNameLastNameAndInitialAsynchronously = async () => {
    this.initial = "Q";

    const promise = new Promise((resolve, reject) => {
      resolve("Success");
    });
    await promise;
    this.setFirstNameLastName();
  };

  @action.bound
  setFirstNameLastName() {
    this.firstName = "Jim";
    this.lastName = "Corte";
  }

  @computed
  get fullName() {
    return this.initial + " " + this.firstName + " " + this.lastName;
  }
}

const john = new Person();
function CounterParent()
{
  john.setFirstNameLastNameAndInitialAsynchronously();
autorun(() => {
  console.log("autorun called", john.fullName);
});


return("SAmple");
}
export default CounterParent;
*/
/*import React, { Component } from "react";
import { render } from "react-dom";
import { observable, action } from "mobx";
import { observer } from "mobx-react";

@observer
class CounterParent extends Component {
  @observable count = 0;
  @observable tripleTheCount = 1;

  updateCounts = () => {
    this.count = this.count + 1;
    this.tripleTheCount = this.tripleTheCount * 3;
    
  };

  render() {
    alert(this.count+"   "+this.tripleTheCount);
    console.log("render Counter");
    return (
      <div>
        <p>Count: {this.count}</p>
        <p>Triple Count: {this.tripleTheCount}</p>
        <button onClick={this.updateCounts}>Update counts</button>
      </div>
    );
  }
}

export default CounterParent;
*/
/*import React from "react";
import { render } from "react-dom";
import { observer } from "mobx-react";
import { observable, action } from "mobx";

@observer
class CounterParent extends React.Component {
  @observable parentCounter = 23;

  @action.bound
  onParentCounterDecrement(){
    this.parentCounter +=0;
  }

  render() {
    console.log("render CounterParent");
    return (
      <CounterChild
        onParentCounterDecrement={this.onParentCounterDecrement}
        parentCounter={this.parentCounter}
      />
    );
  }
}

@observer
class CounterChild extends React.Component {
  @observable childCounter1 = 77;
  @observable childCounter2 = 57;

  @action.bound
  onDecrement() {
    const { onParentCounterDecrement } = this.props;
    onParentCounterDecrement();
    this.childCounter2 -= 0;
  }

  render() {
    console.log("render CounterChild");
    const { parentCounter } = this.props;

    return (
      <div>
        <button onClick={this.onDecrement}>Decrement</button>
        <div>parentCounter: {parentCounter}</div>
        <div>childCounter1: {this.childCounter1}</div>
        <div>childCounter2: {this.childCounter2}</div>
      </div>
    );
  }
}

export default CounterParent;
*/
/*import { observable, action, autorun } from "mobx";

class Product {
  @observable price = 0;
  @observable profit = 0;

  @action.bound
  setPriceAndProfit(price, profit) {
    this.price = price;
    this.profit = profit;
  }

  dispose = autorun(() => {
    console.log("Autorun called");
    console.log("total", this.price * this.profit);
  });
}

const product = new Product();
function CounterParent()
{

product.setPriceAndProfit(55, 5);

product.dispose();
return("SAmple");
}
export default CounterParent;
*/

/*import { observable, autorun ,reaction} from "mobx";

class Person {
  @observable address = {
    city: "Hyderabad",
    state: "Telangana",
  };

  setAddress = () => {
    this.address = {
      city: "Los Angeles",
      state: "California",
    };
  };
}

const person = new Person();


function CounterParent()
{

autorun(() => {
  console.log("autorun called", person.address);
});

reaction(
  () => person.address,
  () => {
    console.log("reaction called", person);
  }
);

person.setAddress();


return("Sample hello Hii");
}
export default CounterParent;
*/
/*
import React, { Component } from "react";
import { render } from "react-dom";
import { observable, action, computed } from "mobx";
import { observer } from "mobx-react";

@observer
class CounterParent extends Component {
  @observable price = 0;
  @observable amount = 0;
  @observable currency = "Rupees";

  @action
  setPriceAndAmountAndCurrencyAsynchronously = async () => {
    this.currency = "Dollars";

    // Suppose we got price and quantity from server response
    const promise = new Promise((resolve, reject) => {
      resolve({
        price: "40",
        amount: "150",
      });
    });
    const { price, amount } = await promise;
    this.setPriceAndAmount(price, amount);
  };

  @action.bound
  setPriceAndAmount(price, amount) {
    this.price = price;
    this.amount = amount;
  }

  @computed
  get total() {
    return this.price + this.amount + " " + this.currency;
  }

  render() {
    console.log("render ProductView" +this.price + "   "+this.amount + " " + this.currency);
    return (
      <div>
        {this.total}
        <button onClick={this.setPriceAndAmountAndCurrencyAsynchronously}>
          Change details
        </button>
      </div>
    );
  }
}

export default CounterParent;
*/
/*import React, { Component } from "react";
import { render } from "react-dom";
import { observable, action } from "mobx";
import { observer } from "mobx-react";

@observer
class CounterParent extends Component {
  @observable count = 0;
  @observable doubleTheCount = 2;

  @action.bound
  async updateCounts() {
    let promise = new Promise((resolve, reject) => {
      resolve("Success");
    });
    promise.then(action(() => {
      this.count = this.count + 1;
      this.doubleTheCount = this.doubleTheCount * 2;
    }));
  }

  render() {
    console.log("render Counter");
    return (
      <div>
        <p>Count: {this.count}</p>
        <p>Double Count: {this.doubleTheCount}</p>
        <button onClick={this.updateCounts}>Update counts</button>
      </div>
    );
  }
}
export default CounterParent;
*/
/*import React, { Component } from "react";
import { render } from "react-dom";
import { observable, computed, action } from "mobx";
import { observer } from "mobx-react";

@observer
class CounterParent extends Component {
  @observable firstCounter = 0;
  @observable secondCounter = 0;

  @computed
  get displayFirstCounterAndSecondCounter() {
    console.log("computed value");
    return `${this.firstCounter} ${this.secondCounter}`;
  }

  @action.bound
  onChangeFirstAndSecondCount() {
    this.firstCounter = this.firstCounter + 3;
    this.secondCounter = this.secondCounter + 20;
  }

  render() {
    return (
      <div>
        <p>
          Counter display string: {this.displayFirstCounterAndSecondCounter}
        </p>
        <button onClick={this.onChangeFirstAndSecondCount}>
          Change counters
        </button>
      </div>
    );
  }
}

export default CounterParent;
*/
/*import React, { Component } from "react";
import { render } from "react-dom";
import { observable, action } from "mobx";
import { observer } from "mobx-react";

@observer
class CounterParent extends Component {
  @observable count = 12;
  @observable doubleTheCount = 13;

  @action.bound
  async updateCounts() {
    this.count = this.count + 1;

    let promise = new Promise((resolve, reject) => {
      resolve("Success");
    });
    promise.then(() => {
      this.count = this.count + 1;
      this.doubleTheCount = this.doubleTheCount * 2;
    });
  }

  render() {
    console.log("render Counter");
    return (
      <div>
        <p>Count: {this.count}</p>
        <p>Double Count: {this.doubleTheCount}</p>
        <button onClick={this.updateCounts}>Update counts</button>
      </div>
    );
  }
}

export default CounterParent;
*/
/*import { observable, computed, reaction } from "mobx";

class Product {
  @observable price = 0;
  @observable tax = 0;

  setPriceAndTax = () => {
    this.price = 40;
    this.tax = 4;
  };

  @computed
  get total() {
    alert(this.price+"    "+this.tax);
    return this.price + this.tax;
  }
}

const product = new Product();
function CounterParent()
{
reaction(
  () => product.total,
  () => {
    
    console.log("reaction called");
  }
);

product.setPriceAndTax();



return("Sample hello Hii");
}
export default CounterParent;
*/
/*
import { observable, action, computed, autorun,reaction } from "mobx";

class Product {
  @observable price = 0;
  @observable amount = 0;
  @observable currency = "Rupees";

  @action
  setPriceAndAmountAndCurrencyAsynchronously = async () => {
    this.currency = "Dollars";

    // Suppose we got price and quantity from server response
    const promise = new Promise((resolve, reject) => {
      resolve({
        price: 10,
        amount: 10,
      });
    });
    const { price, amount } = await promise;
    this.setPriceAndAmount(price, amount);
    //this.currency='Rupe';
  };
  setPriceAndAmount = (price, amount) => {
    this.price = price;
    this.amount = amount;
  };

  @computed
  get total() {
    return this.price * this.amount + " " + this.currency;
  }
}

const product = new Product();
function CounterParent()
{
autorun(() => {
  console.log("autorun called", product.total);
});

reaction(()=>{console.log(product.currency);return product.currency+product.price;},()=>{console.log("hii")});

product.setPriceAndAmountAndCurrencyAsynchronously();

return("Sample hello Hii");
}
export default CounterParent;
*/

/*import { observable, action, computed, autorun,reaction } from "mobx";
class Person {
  @observable address = {
    city: "Hyderabad",
    state: "Telangana",
  };

  setAddress = () => {
    this.address = {
      city: "Los Angeles",
      state: "California",
    };
  };
  setAddress1 = () => {
    this.address = {
      city: "Los",
      state: "Calif",
    };
  };
}
    const person = new Person();
function CounterParent()
{

person.setAddress();

autorun(() => {
    console.log("autorun called", person.address);
    alert("autorun");

});


reaction(
  () => person.address,
  () => {
      alert("reaction");
    console.log("reaction called", person);

  }
);



return("Sample hello Hii");
}
export default CounterParent;

*/
/*

import React, { Component } from "react";
import { render } from "react-dom";
import { observable, action, computed } from "mobx";
import { observer } from "mobx-react";


@observer
class CounterParent extends Component {
  @observable count = 0;
  @observable tp=1;
  
  @action.bound
  async updateCount(){
    
    await new Promise((resolve)=>{resolve("s")});
  this.count=this.count+1;
    this.tp=this.tp*3;
    
  }
  render(){
    alert(this.count+"   "+this.tp);
    console.log("render")
    return(
      <div>
      <p>Count:{this.count}</p>
      <p>Triple Count:{this.tp}</p>
      <button onClick={this.updateCount}>updateCount</button>
      </div>
      
      )
  }
}
export default CounterParent;
*/
/*
import React, { Component } from "react";
import { render } from "react-dom";
import { observable, action, computed } from "mobx";
import { observer } from "mobx-react";

@observer
class CounterParent extends Component {
  @observable price = 0;
  @observable amount = 0;
  @observable currency = "Rupees";

  @action
  setPriceAndAmountAndCurrencyAsynchronously = async () => {
    this.currency = "Dollars";
    const promise = new Promise((resolve, reject) => {
      resolve({
        price: "40",
        amount: "150",
      });
    });
    
    
    const { price, amount } = await promise;
    this.setPriceAndAmount(price, amount);
  };
  
  setPriceAndAmount = (price, amount) => {
    this.price = price;
    this.amount = amount;
  };

  @computed
  get total() {
    return this.price + "    "+this.amount + "  " + this.currency;
  }

  render() {
    alert("render ProductView     "+this.total);
    return (
      <div>
        {this.total}
        <button onClick={this.setPriceAndAmountAndCurrencyAsynchronously}>
          Change details
        </button>
      </div>
    );
  }
}

export default CounterParent;
*/
/*
import React, { Component } from "react";
import { render } from "react-dom";
import { inject, Provider, observer } from "mobx-react";
import { observable, action } from "mobx";


class AppStore {
  @observable message = {
    title: "Hello",
  };

  @action.bound
  onChangeTitle(title) {
    this.message.title = title;
  }
}
const appStore = new AppStore();


@inject("appStore")
@observer
class Title extends Component {
  render() {
    const { title } = this.props.appStore.message;
    return <p>Title: {title}</p>;
  }
}

@inject("appStore")
@observer
class Message extends Component {
  onChangeTitle = () => {
    const { onChangeTitle } = this.props.appStore;
    onChangeTitle("Hi");
  };
  render() {
    return (
      <div>
        <Title />
        <button onClick={this.onChangeTitle}>Change title {this.props.appStore.message.title}</button>
      </div>
    );
  }
}
@observer
class CounterParent extends Component {
  render() {
     
    return (
      <Provider appStore={appStore}>
      
        <div>{appStore.message.title}</div>
        <Message />
      </Provider>
    );
  }
}
export default CounterParent;


*/
/*
import { observable, action, computed, autorun } from "mobx";

class Person {
  @observable initial = "P";
  @observable firstName = "John";
  @observable lastName = "Grisham";

 @action
  setFirstNameLastNameAndInitialAsynchronously = async () => {
    this.initial = "Q";
      
    const promise = new Promise((resolve, reject) => {
      resolve("Success");
    });
    await promise;
    this.setFirstNameLastName();
  };
  @action.bound
  setFirstNameLastName() {
    this.firstName = "Jim";
    this.lastName = "Corte";
  }

  @computed
  get fullName() {
    return this.initial + " " + this.firstName + " " + this.lastName;
  }
}

function CounterParent(){
    

const john = new Person();
john.setFirstNameLastNameAndInitialAsynchronously();
autorun(() => {
    alert(john.fullName);
  console.log("autorun called", john.fullName);
});


return (
    'example');

}
export default CounterParent;
*/
/*import React from "react";
import { render } from "react-dom";
import { observer } from "mobx-react";
import { observable, action } from "mobx";

//@observer
class CounterChild1 extends React.Component {
  render() {
    console.log("render CounterChild1");

    return <p>childCounter1: {this.props.childCounter1}    {this.props.childCounter1}</p>;
  }
}

//@observer
class CounterChild2 extends React.Component {
  render() {
    console.log("render CounterChild2");

    return <p>childCounter2: {this.props.childCounter2}   {this.props.childCounter2}</p>;
  }
}
@observer
class CounterParent extends React.Component {
  @observable childCounter1 = 301;
  @observable childCounter2 = 12;

  @action.bound
  onUpdateCounterChild1() {
    this.childCounter1 +=2;
  }

  @action.bound
  onUpdateCounterChild2() {
    this.childCounter2+=4;
  }
  @action.bound
  onUpdate() {
    this.onUpdateCounterChild1();
    this.onUpdateCounterChild2();
  }

  render() {
    console.log("render CounterParent");
    return (
      <div>
        <CounterChild1 childCounter1={this.childCounter1} childCounter1={this.childCounter1} />
        <CounterChild2 childCounter2={this.childCounter2} childCounter2={this.childCounter2} />
        <button onClick={this.onUpdate}>Update count</button>
      </div>
    );
  }
}

export default CounterParent;


*/
/*import React from 'react';

export default class FadeApp extends React.Component {
constructor(){
    super();
    this.state={
        value:'',
    }
}
add=(v)=> {
 alert(v);   
}


render() {
    let value;
    if(this.state.value){
        value="enabled";
    }
    else{
        value="disabled";
    }
    return (
        <div className="add-item">
            <input onChange={e => this.setState({ value: e.target.value })} value={this.state.value} />
                <button type='button' disabled={!this.state.value} style={{backgroundColor:'skyblue'}} onClick={()=>this.add(value)}>Click me</button>
        </div>
    );
}

}*/

/*import React from 'react';
import styled from  '@emotion/styled';

const Fade = styled.div`
  ${props => props.out ?
    `display: none;`
   : `display: inline-block;`
   }
  animation: ${props => props.out ? 'fadeOut' : 'fadeIn'} 1s linear 10;
  @keyframes fadeIn{
  from {
    transform: scale(.25);
    opacity: 0;
  }

  to {
    transform: scale(1);
    opacity: 1;
  }
  }
@keyframes fadeOut{
  from {
    transform: scale(1);
    opacity: 0;
  }

  to {
    transform: scale(.25);
    opacity: 1;
  }
}
`;
function FadeApp() {
  return (
    <div className='w-screen h-screen flex justify-center items-center text-3xl'>
      <Fade>&lt;💅test&gt;</Fade>
    </div>
  );
}

export default FadeApp;

/*import React from 'react'
let state=0;
class Practice extends React.Component{
    state={
        count:0
    }
    onIncrement=()=>{
        this.setState({count:this.state.count+1});
        console.log('First log',this.state.count);
        this.setState({count:this.state.count+1});
        console.log('Second log',this.state.count);
        this.setState({count:this.state.count+1});
        console.log('Third log',this.state.count);
        }
    /*onIncrementWithSetStateAsFunction=()=>{
        this.setState(prestate=>{
            count:prestate.count+1
        })
        this.setState(prestate=>{
            count:prestate.count+1
        })
        this.setState(prestate=>{
            count:prestate.count+1
        })
        console.log('Last log',this.state.count);
    }
    render(){
    return (
        <div>
    <button type='button' onClick={this.onIncrement}>Click on button1</button>
    </div>
    );
    }
    
    
}
//export {CarList,Car};
export default Practice;
*/
/*class ChildCounter extends React.Component{
    state={
        childCounter1:0,
        childCounter2:0
    }
    onIncrement=()=>{
        this.props.onParentCounterIncrement();
        this.setState({
            childCounter1:this.state.childCounter1+1
        })
    }
    render(){
        console.log('ChildCounter Called');
        return ' ';
    }
}
class ParentCounter extends React.Component{
    state={
        parentCounter:0
    }
    onParentCounterIncrement=()=>{
        this.setState({
            parentCounter1:this.state.parentCounter+1
        })
    }
    render(){
        console.log('ParentCounter Called')
        return (
            <ChildCounter 
            onParentCounterIncrement={this.onParentCounterIncrement}
            parentCounter={this.state.parentCounter}
            />
            );
    }
}
export default ParentCounter;*/
/*import React,{Component} from 'react';
import {action} from 'mobx';
import {create} from 'apisauce';
import {networkCallWithApisauce} from '../../utils/APIUtils';
import {apiMethods} from '../../constants/APIConstants';
import {bindPromiseWithOnSuccess} from '@ib/mobx-promise';
class TodoService{
    api;
    constructor(){
        this.api=create({
            baseURL:'https://5e6864ded426c00016b7cfce.mockapi.io/api/v1/'
        });
    }
    @action.bound
    postTodoAPI(){
        let todoObject=
            {'id':Math.random(),
            'title':'Loharika',
            'isCompleted':true,};
        return (networkCallWithApisauce(
            this.api,
            'users123/',
            todoObject,
            apiMethods.post
        ));
    }
    @action.bound
    getPosted(response){
        console.log(response);
    }
    @action.bound
    getTodosAPI(){
        return (networkCallWithApisauce(
            this.api,
            'users123/',
            {},
            apiMethods.get
        ));
    }
    
}
let todoService=new TodoService();
        

class LocalApp extends Component{
    postTheObject=()=>{
        //alert("post");
        todoService.postTodoAPI();
        this.getTheObjectData();
    }
    getTheObjectData=()=>{
        //alert("getting the data");
        const todosPromise=todoService.getTodosAPI();
        return bindPromiseWithOnSuccess(todosPromise)
        .to(this.setGetTodoListAPIStatus,this.setTodoListResponse)
        .catch(this.setGetTodoListAPIError);
    }
    setGetTodoListAPIStatus=(apiStatus)=>{
        //this.getTodoListAPIStatus=apiStatus;
    }
     setTodoListResponse=(todosResponse)=>{
         let DataArray=[];
        console.log(todosResponse);
        DataArray=todosResponse.map(todo=>{
            return JSON.parse(JSON.parse(todo.data));
        });
        console.log(DataArray);
    }
    setGetTodoListAPIError=(error)=>{
        //this.getTodoListAPIError=error;
    }
    render(){
        return (
            <div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-5" onClick={this.postTheObject}>
            Click to post the Object
        </button>

        </div>
            )
        
    }
}
export default LocalApp;
*/