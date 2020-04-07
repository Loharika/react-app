import React from 'react'
/*class Form extends React.Component{
    render(){
        return (
            <form>
                <label>
                    Name:<input type="text" name="name" />
                </label>
                <input type="submit" value="Submit" />
            </form>
            );
    }
}*/
/*class Form extends React.Component{
    constructor(props){
        super(props);
        this.state={value:'Please write an essay about your favorite DOM element.'
        };
    }
    handleValue=(event)=>{
        this.setState({
            value:event.target.value
        });
    }
    handleSubmit=(event)=>{
        alert("The name is Submitted as"+this.state.value);
        event.preventDefault();
    }
    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:<input type="text" name="name" value={this.state.value} onChange={this.handleValue}/>
                </label>
                <input type="submit" value="Submit" />
            </form>
            );
    }
    
}*/
/*class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
  }

  handleChange=(event)=> {
    this.setState({value: event.target.value});
  }

  handleSubmit=(event)=> {
    alert('Your favorite flavor is: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Pick your favorite flavor:
          
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="StrawBerry">Straw Berry</option>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}*/
/*class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isGoing: true,
      numberOfGuests: 2,
      names:{}
    };
  }

  handleInputChange=(event)=>{
    const target = event.target;
    const value = target.name === 'isGoing' ? target.checked : target.value;
    const name = target.name;

    this.setState({
    [name]: value
    });
  }

  render() {
    return (
      <form>
        <label>
          Is going:
          <input
            name="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Number of guests:
          <input
            name="numberOfGuests"
            type="number"
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange} />
        </label>
      </form>
    );
  }
}
*/
/*function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>The water would boil.</p>;
  }
  return <p>The water would not boil.</p>;
}
class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {temperature: ''};
  }

  handleChange=(event)=> {
    this.setState({temperature: event.target.value});
  }

  render() {
    const temperature = this.state.temperature;
    return (
      <fieldset>
        <legend>Enter temperature in Celsius:</legend>
        <input
          value={temperature}
          onChange={this.handleChange} />
        <BoilingVerdict celsius={parseFloat(temperature)} />
      </fieldset>
    );
  }
}*/
/*const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
};

class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {temperature: ''};
  }

  handleChange(e) {
    this.setState({temperature: e.target.value});
  }

  render() {
    const temperature = this.state.temperature;
    const scale = this.props.scale;
    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}:</legend>
        <input value={temperature}
               onChange={this.handleChange} />
      </fieldset>
    );
  }
}
class Form extends React.Component {
  render() {
    return (
      <div>
        <TemperatureInput scale="c" />
        <TemperatureInput scale="f" />
      </div>
    );
  }
}
*/
/*class Form extends React.Component {
  constructor(){
    super()
    this.state={count:20}
  }
  onIncrement=()=>{
    let {count}=this.state;
    
    this.setState(pre=>({
      count:pre.count+1
    }));
    this.setState(pre=>({
      count:pre.count+1
    }));
    this.setState(pre=>({
      count:pre.count+1
    }));
    this.setState({count:count+1})
    this.setState({count:count+1})
    this.setState({count:count+3})
    
  }
  render(){
    const {count}=this.state;
    return (
      <div>
      <p>Count:{count}</p>
      <button onClick={this.onIncrement}>Increament</button>
      </div>
      );
  }
}*/
/*function FancyBorder(props) {
  return (
    <div className={'FancyBorder FancyBorder-' + props.color}>
      {props.children}
    </div>
  );
}
function Form() {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">
        Welcome
      </h1>
      <p className="Dialog-message">
        Thank you for visiting our spacecraft!
      </p>
    </FancyBorder>
  );
}*/
function Contacts() {
  return <div className="Contacts" style={{color:"blue",backgroundColor:"grey"}}>Hello</div>;
}

function Chat() {
  return <div className="Chat"  style={{color:"green",backgroundColor:"skyblue"}}>HOLA!!!!</div>;
}

function SplitPane(props) {
  return (
    <div className="SplitPane" style={{display:"flex"}}>
      <div className="SplitPane-left">
        {props.right}
      </div>
      <div className="SplitPane-right">
        {props.left}
      </div>
    </div>
  );
}

function Form() {
  return (
    <SplitPane
      left={
        <Contacts />
      }
      right={
        <Chat />
      } />
  );
}
export default Form;