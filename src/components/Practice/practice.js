import React from 'react';

class Cat extends React.Component {
  render() {
    const mouse = this.props.mouse;
    return (
      <img src="https://i.pinimg.com/originals/7a/af/0f/7aaf0f1d48f57b7779c0fbcf103c2d0f.jpg" 
      style={{ position: 'absolute', left: mouse.x, top: mouse.y ,width:'70px',height:'70px',borderRadius:'50%'}} />
    );
  }
}

class MouseWithCat extends React.Component {
  constructor(props) {
    super(props);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.state = { x: 0, y: 0 };
  }

  handleMouseMove(event) {
    this.setState({
      x: event.clientX,
      y: event.clientY
    });
  }

  render() {
    return (
      <div style={{ height: '100vh' }} onMouseMove={this.handleMouseMove}>
      {this.props.render(this.state)}
      </div>
    );
  }
}

class Sample extends React.Component {
  render() {
    return (
      <div>
        <h1>Move the mouse around!</h1>
        <MouseWithCat render={mouse=>(
        <Cat mouse={mouse} />)
        }/>
      </div>
    );
  }
}

export default Sample;
/*
import React from "react";
import { render } from "react-dom";
import { observer } from "mobx-react";
import { observable } from "mobx";

class AuthStore {
  @observable isSignedIn = false;

  onChange=()=> {
    console.log("onChange isSignedIn");
    this.isSignedIn = !this.isSignedIn;
  }
}

const authStore = new AuthStore();

@observer
class Sample extends React.Component {
  onChange() {
    const { onChange } = authStore;
    onChange();
  }
  render() {
    const { isSignedIn } = authStore;
    console.log("isSignedIn:", isSignedIn);

    return <button onClick={this.onChange}>Sign In</button>;
  }
}
*/
/*import React from "react";
import { render } from "react-dom";
import { observer } from "mobx-react";
import { observable } from "mobx";

class ThemeStore {
  @observable selectedTheme = "dark";

  onChange() {
    console.log("onChange selectedTheme");
    if (this.selectedTheme === "dark") {
      this.selectedTheme = "light";
    } else {
      this.selectedTheme = "dark";
    }
  }
}

const themeStore = new ThemeStore();

@observer
class Sample extends React.Component {
  onChange() {
    const { onChange } = themeStore;
    onChange();
  }

  render() {
    const { selectedTheme } = themeStore;
    console.log("SelectedTheme:", selectedTheme);

    return <button onClick={this.onChange}>Change theme</button>;
  }
}

*/
/*import React from "react";
import { render } from "react-dom";

class Sample extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "Ramu", age: 24 };
  }

  componentDidMount() {
    this.setState({ name: "Manu" });
    this.setState({ age: 23 });
    this.setState({ name: "Madhu" });
  }

  onIncrementAge = () => {
    this.setState((prevState) => ({ age: prevState.age + 1 }));
  };

  render() {
    const { name, age } = this.state;
    return (
      <div>
        <h2>Person:</h2>
        <p>Name: {name}</p>
        <p>Age: {age}</p>
        <button onClick={this.onIncrementAge}>Increment age</button>
      </div>
    );
  }
}
*/

/*import React from "react";
import { render } from "react-dom";

class ListItem extends React.Component {
  shouldComponentUpdate(nextProps) {
    console.log(nextProps);
    if (this.props.value === nextProps.value) {
      console.log("yes!!")
      return false;
    }
    return true;
  }

  render() {
    console.log("tt  "+this.props.value)
    console.log("new item");
    return <li>{this.props.value}</li>;
  }
}

class Sample extends React.Component {
  constructor(props) {
    super(props);
    this.state = { numbers: [0, 10, 20, 30, 40, 50] };
  }
  renderListItems = () => {
    const { numbers } = this.state;
    return numbers.map((number, index) => (
      <ListItem key={index} value={number} />
    ));
  };

  addNumberToList = () => {
    const { numbers } = this.state;

    this.setState({
      numbers: [...numbers, numbers.length * 10],
    });
  };

  render() {
    return (
      <div>
        <ul>{this.renderListItems()}</ul>
        <button onClick={this.addNumberToList}>Add number</button>
      </div>
    );
  }
}

*/
/*import React from 'react';

import { observable, values } from "mobx";

const persons = observable(new Map());

const data = [
  {
    id: 1,
    name: "Sri Potti Sriramulu",
    city: "Nellore",
    state: "Andhra Pradesh",
  },
  {
    id: 2,
    name: "Pingali Venkayya",
    city: "Vijayawada",
    state: "Andhra Pradesh",
  },
  {
    id: 3,
    name: "Hanuma Vihari",
    city: "Kakinada",
    state: "Andhra Pradesh",
  },
];

function Sample(){
data.forEach((person) => {
  persons.set(person.id, person);
});

const cities1 = [];
for (const [key, value] of persons.entries()) {
  cities1.push(value.city);
}
console.log(typeof persons.entries());
const cities2 = Array.from(persons.values()).map((person) => person.city);

const cities3 = values(persons).map((person) => person.city);

console.log(typeof persons.values());
//const cities4 = persons.values().map((person) => person.city);
return (<div>hello World</div>);

}*/


/*
import React, { Component } from "react";
import { render } from "react-dom";
import { observable, action,computed,autorun,reaction } from "mobx";
import {observer} from 'mobx-react';
@observer
class Sample extends React.Component{
  @observable count=0;
  constructor(){
    super();
    this.count=0;
  }
  @computed get totalCount(){
    console.log("computed");
    return this.count;
  }
  onClick=()=>{
    this.count++;
  }
  componentWillUnmount(){
    this.dispose()
    this.reactionEvent();
  }
  
  
  dispose=autorun(()=>{console.log("autorun Called     "+1)});
  reactionEvent=reaction(()=>1,()=>console.log("reaction Called    "));
  
  render(){
    console.log("render");
    return (
      <div>
      <h1>{this.count}</h1>
      <button type='button'  onClick={this.onClick}>click to change count</button>
      </div>
      );
  
  
  
  
  }
}
export default Sample;*/

/*import React, { Component } from "react";
import { render } from "react-dom";
import { observable, action } from "mobx";
import { observer } from "mobx-react";

@observer
class Sample extends Component {
  @observable userDetails = null;
  @observable count = 0;
  @observable secondCount = 0;

 @action.bound
  async getUserDetails  () {
    await null;
    this.count = this.count + 1;
    this.secondCount = this.secondCount + 1;
    let promise = new Promise((resolve, reject) => {
      resolve({
        name: "Tom Preston-Werner",
        company: "Facebook",
      });
    });
    let response = await promise;
    this.setUserDetailsResponse(response);
  };
  
  @action.bound
  setUserDetailsResponse(response) {
    this.userDetails = response;
  }

  render() {
    console.log("render UserProfile");
    console.log(this.count, this.secondCount);

    if (this.userDetails === null) {
      return <button onClick={this.getUserDetails}>Get user details</button>;
    }
    return (
      <div>
        <p>Name: {this.userDetails.name}</p>
        <p>Company: {this.userDetails.company}</p>
      </div>
    );
  }
}
*/
/*import React from 'react';
function CustomTextInput(props) {
  //console.log(props);
  return (
    <div>
      <input ref={props.inputRef} />    </div>
  );
}

class Sample extends React.Component {
  render() {
    return (
      <CustomTextInput
        inputRef={el =>{ 
          this.inputElement = el;
          console.log(this.inputElement);
        }}      />
    );
  }
}*/
/*class Sample extends React.Component {
  constructor(props) {
    super(props);

    this.textInput = null;
    this.setTextInputRef = element => {  
      console.log(element);
      console.log("askgiroifdjffsg");
      this.textInput = element;   
      };
    this.focusTextInput = () => {      
      // Focus the text input using the raw DOM API      
      if (this.textInput) this.textInput.focus();   
      };  
    
  }

    componentDidMount() {
      console.log(this.textInput);
    // autofocus the input on mount
    this.focusTextInput();  }

  render() {
    // Use the `ref` callback to store a reference to the text input DOM
    // element in an instance field (for example, this.textInput).
    return (
      <div>
        <input
          type="text"
          ref={this.setTextInputRef}        />
        <input
          type="button"
          value="Focus the text input"
          onClick={this.focusTextInput}        />
      </div>
    );
  }
}*/

/*import React from 'react';
import  {observable} from 'mobx'; 

const CustomTextInput=(props)=> {
  return (
    <div>
      <input ref={props.inputRef} />
    </div>
  );
}

function Parent(props) {
  return (
    <div>
      My input: <CustomTextInput inputRef={props.inputRef} />
    </div>
  );
}

class Sample extends React.Component {
  constructor(props) {
    super(props);
    this.inputElement = React.createRef();
  }
  render() {
    return (
      <Parent inputRef={this.inputElement} />
    );
  }
}export default Sample;
*/
/*import {observable,action} from 'mobx';
import {observer} from 'mobx-react';
@observer
class CustomTextInput extends React.Component{
  @observable text;
  constructor(props){
    super(props);
    this.text='';
    this.textInput = React.createRef();  
    this.submitButton=React.createRef();
  }

  focusTextInput=()=> {
    this.textInput.current.focus();  
  }
  @action.bound
  onChange(userInput,){
    this.text=userInput;
    
  }
  @action.bound
  onKeyDown(keyCode){
    if(keyCode===13){
      this.submitButton.current.focus();
      alert('focussed');
      this.text='';
    }
  }
  render(){
    return (
      <div>
        <input
          type="text"
          ref={this.textInput} 
          defaultValue={this.text}
          onChange={()=>this.onChange(event.target.value)}
          onKeyDown={()=>this.onKeyDown(event.keyCode)}
          />        
        <input
        className="bg-blue-500 hover:bg-blue-700  text-white font-bold py-2 px-4 rounded focus:shadow-outline"
          ref={this.submitButton}
          type="button"
          value="Submit"
        />
      </div>
      );
  }
}
class Sample extends React.Component {
  constructor(props) {
    super(props);
    this.textInputSample = React.createRef();  }

  componentDidMount() {
    this.textInputSample.current.focusTextInput(); 
    console.log(this.textInputSample.current.focusTextInput);
    }

  render() {
    return (
      <CustomTextInput ref={this.textInputSample} />    );
  }
}
export default Sample;
*/
/*import React from "react";
import { render } from "react-dom";
import { observer } from "mobx-react";
import { observable } from "mobx";
class CounterParent extends React.Component{
  constructor(){
    super();
    
  }
  render(){
    return (
      <div className='flex'>
          <div style={{border:'2px solid black',width:'200px',height:'300px'}} className='flex  m-5'>
            
            <img className='object-cover'src="https://encrypted-				tbn0.gstatic.com/images?							q=tbn:ANd9GcQo9XJZyV_3gQQkBDSZEHDJZzD9ENz-			P0ltMPHv6ILKQAfNYIm__GaJDJZBBA&s=10"alt="tree"/>
            </div>
          <div style={{border:'2px solid black',width:'200px',height:'300px'}} className='flex  m-5'>
          
          <img className='object-fill'src="https://encrypted-				tbn0.gstatic.com/images?							q=tbn:ANd9GcQo9XJZyV_3gQQkBDSZEHDJZzD9ENz-			P0ltMPHv6ILKQAfNYIm__GaJDJZBBA&s=10"alt="tree"/>
          </div>
          <div style={{border:'2px solid black',width:'200px',height:'300px'}} className='flex  m-5'>
          
          <img className='object-contain 'src="https://encrypted-				tbn0.gstatic.com/images?							q=tbn:ANd9GcQo9XJZyV_3gQQkBDSZEHDJZzD9ENz-			P0ltMPHv6ILKQAfNYIm__GaJDJZBBA&s=10"alt="tree"/>
          </div>
          <div style={{border:'2px solid black',width:'200px',height:'300px'}} className='flex m-5 '>
          
          <img className='object-scale-down 'src="https://encrypted-				tbn0.gstatic.com/images?							q=tbn:ANd9GcQo9XJZyV_3gQQkBDSZEHDJZzD9ENz-			P0ltMPHv6ILKQAfNYIm__GaJDJZBBA&s=10"alt="tree"/>
    
          </div>
      </div>
    );
  }
}
export default CounterParent;
*/

/*import React from "react";
import { render } from "react-dom";
import { observer } from "mobx-react";
import { observable } from "mobx";

class ThemeStore {
  @observable theme = "dark";

  onChange() {
    console.log("onChange theme");
    if (this.theme === "dark") {
      this.theme = "light";
    } else {
      this.theme = "dark";
    }
  }
}

const themeStore = new ThemeStore();

@observer
class CounterParent extends React.Component {
  onChange() {
    themeStore.onChange();
  }
  render() {
    console.log("render ThemeButton", themeStore.theme);

    return <button onClick={this.onChange}>Change theme</button>;
  }
}*/




/*import React, { Component } from "react";

import { render } from "react-dom";
import { observer } from "mobx-react";
import { observable, computed } from "mobx";

@observer
class CounterParent extends Component {
  @observable mobxMonths = ["Jan", "Feb", "Mar", "Apr"];
  jsMonths = ["May", "Jun", "Jul", "Aug"];

  sortedJsMonths = () => {
    return this.jsMonths.sort();
  };

  @computed
  get sortedMobxMonths() {
    return this.mobxMonths.sort();
  }

  render() {
    return (
      <div>
        <p>
          {this.sortedMobxMonths[0]}, {this.mobxMonths[0]}
        </p>
        <p>
          {this.sortedJsMonths()[0]}, {this.jsMonths[0]}
        </p>
      </div>
    );
  }
}
*/

/*import React, { Component } from "react";
import { render } from "react-dom";
import { observer } from "mobx-react";
import { observable, computed } from "mobx";

@observer
class CounterParent extends Component {
  @observable mobxNumbers = [1, 2, 3, 4, 5];
  jsNumbers = [1, 2, 3, 4, 5];

  @computed
  get mobxNumbersReverse() {
    return this.mobxNumbers.reverse();
  }

  jsNumbersReverse() {
    let element=this.jsNumbers.reverse();
    console.log(element);
    return element;
  }

  render() {
    return (
      <div>
        <p>
          {this.mobxNumbersReverse[0]}, {this.mobxNumbers[0]}
        </p>
        <p>
          {this.jsNumbersReverse()[0]}, {this.jsNumbers[0]}
        </p>
      </div>
    );
  }
}*/

/*import React, { Component } from "react";
import { render } from "react-dom";
import { observable, computed } from "mobx";
import { observer } from "mobx-react";

// Example React component that observes state
@observer
class CounterParent extends Component {
  @observable firstName = "Ramu";
  @observable lastName = "Ratnam";
  @observable initial = "K";

  @computed get fullName() {
    console.log("Computed");
    return this.lastName + " " + this.initial;
  }

  changeFirstNameAndLastName = () => {
    this.firstName = "Mark";
  };

  getFullNameFn = () => {
    console.log("getFullNameFn called");
    return this.lastName + " " + this.initial;
  };

  render() {
    return (
      <div>
        <p>FirstName: {this.firstName}</p>
        <p>Fullname: {this.fullName}</p>
        <p>{this.getFullNameFn()}</p>
        <button onClick={this.changeFirstNameAndLastName}>
          Change first name and last name
        </button>
      </div>
    );
  }
}
*/
/*import React, { Component } from "react";
import { render } from "react-dom";
import { observable } from "mobx";
import { observer } from "mobx-react";

@observer
class CounterParent extends React.Component {
  @observable state = {
    name: "Michael",
    address: {
      city: "Hyderabad",
      country: "India",
    },
  };

  prevCityState = this.state.address.city;
  nextCityState = this.state.address.city;

  updateAddress = () => {
    this.prevCityState = this.state.address.city;
    this.state.address.city = "Delhi";
  };
x
  render() {
    this.nextCityState = this.state.address.city;
    console.log(this.nextCityState === this.prevCityState);

    return (
      <div>
        <p>Name: {this.state.name}</p>
        <p>City: {this.state.address.city}</p>
        <p>Name: {this.state.address.country}</p>
        <button onClick={this.updateAddress}>Update address</button>
      </div>
    );
  }
}
*/
/*import React, { Component } from "react";
import { render } from "react-dom";
import { observable } from "mobx";
import { observer } from "mobx-react";

@observer
class CounterParent extends Component {
  @observable userDetails = null;
  @observable count = 0;
  @observable secondCount = 0;

  getUserDetails = async () => {
    await null;
    //this.count = this.count + 1;
    //this.secondCount = this.secondCount + 1;
    let promise = new Promise((resolve, reject) => {
      resolve({
        name: "Tom Preston-Werner",
        company: "Facebook",
      });
    });
    let response = await promise;
    this.userDetails = response;
  };

  render() {
    console.log("render UserProfile");
    console.log(this.count, this.secondCount);

    if (this.userDetails === null) {
      return <button onClick={this.getUserDetails}>Get user details</button>;
    }
    return (
      <div>
        <p>Name: {this.userDetails.name}</p>
        <p>Company: {this.userDetails.company}</p>
      </div>
    );
  }
}

*/

/*import React from "react";
import { render } from "react-dom";
import { observable, computed, autorun } from "mobx";
import { observer } from "mobx-react";

class Person {
  @observable firstName = "Michel";
  @observable lastName = "Weststrate";

  @computed get fullName() {
    return this.firstName + " " + this.lastName;
  }

  changeFirstNameAndLastName = () => {
    this.firstName = "mike";
    this.lastName = "west";
  };
}

const newPerson = new Person();

// Reaction: log the profile info whenever it changes
autorun(() => {
  console.log("Autorun called");
  console.log(newPerson.fullName);
});

// Example React component that observes state
const CounterParent = observer(() => {
  console.log("render ProfileView");

  return (
    <div>
      <p>{newPerson.fullName}</p>
      <button onClick={newPerson.changeFirstNameAndLastName}>
        Change first name and last name
      </button>
    </div>
  );
});*/

/*import React from "react";
import { render } from "react-dom";
import { observable,action, computed, autorun } from "mobx";
import { observer } from "mobx-react";

class Person {
  @observable firstName = "Michel";
  @observable lastName = "Weststrate";

  @computed get fullName() {
    return this.firstName + " " + this.lastName;
  }
//@action.bound
  changeFirstNameAndLastName=()=>{
    this.firstName = "mike";
    this.lastName = "west";
  };
}

const newPerson = new Person();

// Reaction: log the profile info whenever it changes
autorun(() => {
  console.log("Autorun called");
  console.log(newPerson.fullName);
});

// Example React component that observes state
const CounterParent = observer((props) => {
  console.log("render ProfileView");

  return (
    <div>
      <p>{newPerson.fullName}</p>
      <button onClick={newPerson.changeFirstNameAndLastName}>
        Change first name and last name
      </button>
    </div>
  );
});
export default CounterParent;*/
/*import React, { Component } from "react";
import { render } from "react-dom";
import { observable, action } from "mobx";
import { observer } from "mobx-react";

@observer
class CounterParent extends Component {
  @observable count = 243;
  @observable isCountChanged = false;

  @action.bound
  async onChangeCount() {
    this.isCountChanged = true;
    this.count = this.count + 13;

    const promise = new Promise((resolve, reject) => {
      console.log("Before resolve log");
      resolve("Success");
      console.log("After resolve log");
    });
    console.log("Before await log");
    this.count = this.count + 135;
    
    let response = await promise;
    console.log(response);
    this.run();
    //this.count = this.count + 1334;
    this.count = this.count + 133234;
    //this.isCountChanged = false;
  }
  action
  run(){
    this.isCountChanged = false;
    this.count=0;
    //this.isCountChanged = false+"true";
  }

  render() {
    console.log("render Counter" +`${this.count}}`);
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

class CounterParent extends Component {
  state = {
    name: "Michael",
    address: {
      city: "Hyderabad",
      country: "India",
    },
  };

  prevState = this.state;
  nextState = this.state;

  updateAddress = () => {
    this.prevState = this.state;
    this.state.address.city = "Delhi";
  };

  render() {
    this.nextState = this.state;
    console.log(this.nextState === this.prevState);
    console.log(this.nextState.country === this.prevState.country);

    return (
      <div>
        <p>Name: {this.state.name}</p>
        <p>City: {this.state.address.city}</p>
        <p>Name: {this.state.address.country}</p>
        <button onClick={this.updateAddress}>Update address</button>
      </div>
    );
  }
}
export default CounterParent;
*/
/*import React, { Component } from "react";
import { render } from "react-dom";
import {observable}  from 'mobx';
class CounterParent extends Component {
  @observable count;
  constructor(){
    super();
    this.count=2;
  }
  updateCount = () => {
      this.count= 3;
  };

  render() {
    console.log("render Counter");
    return (
      <div>
        <p>Count: {this.count}</p>
        <button onClick={this.updateCount}>Update count</button>
      </div>
    );
  }
}
export default CounterParent;
*/
/*import React from "react";
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
export default CounterParent;*/
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