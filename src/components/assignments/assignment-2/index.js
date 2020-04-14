/*global React*/
/*global ReactDOM*/
const rootEl=document.getElementById('root');
const addButton=document.getElementById('addButton');
const carStatus=document.getElementById('carStatus');
class Car extends React.Component{
    constructor(props){
        super(props);
        this.state={carStartOrStop: false,status:'Stopped',speed: 0 }
    }
    start=()=>{
        this.setState({
            carStartOrStop: true,
            status:'Running'
        });
    }
    stop=()=>{
        this.setState({
            carStartOrStop: false,
            status:'Stopped',
            speed:0
        });
    }
    onApplyBrake=()=>{
        this.setState({speed:this.state.speed-10});
    }
    onAccelerate=()=>{
        if(this.state.status==='Running'){
        this.setState({speed:this.state.speed+10});
        }
    }
    displayStatusText(){
        let status;
        if(this.state.status==='Stopped'){
            status='Stopped';
        }
        else if(this.state.speed>=10){
            status='Car is Running with '+this.state.speed+'kmph';
        }
        else{
            status='Running';
        }
        return status;
    }
  render() {
    const carStartOrStop = this.state.carStartOrStop;
    let button;
    if (carStartOrStop) {
      button = <button onClick={this.stop} className='stop-button'>
      Stop</button>
    } else {
      button = <button onClick={this.start} className='start-button'>
      Start
    </button>
    }
    return (
        <div className='app' id={Math.random()}>
                <div className='id-clear-buttons'>
                    <div>Car Id:{this.props.id}</div>
                    <button type="button" className="clear-button" 
                    onClick={this.props.removeCar}
                    >Clear</button>
                </div>
                <div className="start-stop-buttons">
                {button}
                
                </div>    
                <div className="car-status-display">  
                    <span>Status:
                    {this.displayStatusText()}
                    </span>
                </div>
                <div className="accelerate-decelerate-buttons">
                    <button type="button" className="accelerate-button" onClick={this.onAccelerate}>Accelerate</button>
                    <button type="button" className="decelerate-button" onClick={this.onApplyBrake}>Decelerate</button>
                </div> 
            </div>
        );
  }
}
class CarList extends React.Component{
    constructor(props){
        super(props);
        this.carList=[<Car id='1' removeCar={this.removeCarFromCarsList}/>];
        this.carId=2;
    }
    addCarToCarsList=()=>{
       let element=<Car id={this.carId++} removeCar={this.removeCarFromCarsList} />;
        this.setState({
            carList:this.carList.push(element)
        });
    }
    removeCarFromCarsList=(event)=>{
        alert("Yes!!");
        console.log(event.target.parentNode.parentNode);
        let id=event.target.parentNode.parentNode.id;
      let element = document.getElementById(id);
    element.parentNode.removeChild(element);
    }
    renderCarsList=()=>{
        const listOfCars = this.carList.map((eachcar) =>
                <li>{eachcar}</li>);
            return listOfCars; 
    }
    render(){
        return (
            <div>
            <button className='add-button' onClick={this.addCarToCarsList}>Add </button>
            <ul className='car-list'>{this.renderCarsList()}</ul>
            </div>);
    }
}
ReactDOM.render(<CarList />,document.getElementById("root"));
//e.target.parentNode.removeChild(e.parentNode);
/*onClick={(function(e){
      console.log(e.target.parentNode.parentNode.id);
      let id=e.target.parentNode.parentNode.id;
      let element = document.getElementById(id);
    element.parentNode.removeChild(element);
      //e.target.parentNode.removeChild(e.parentNode.parentNode);
                    })}*/