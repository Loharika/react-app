import React,{Component} from 'react';
import {observable} from 'mobx';
import {Provider,inject,observer} from 'mobx-react';
@observer
class A extends Component{
    @observable temp;
    constructor(props){
        super(props);
        this.temp='Hello Rgukt!';
        this.colors = observable({
                foreground: 'white',
                background: 'lightgrey'});
            }
    onChange=(event)=>{
        this.value=event.target.value;
    }
    render(){
        return (
            <div style={{margin:'150px'}}>
            <Provider temp={this.temp} colors={this.colors}>
            <B ></B>
            <Button />
            </Provider>
            </div>
            );
    }
}

@inject("colors")
@observer
class Button extends Component{
    render(){
        let {colors}=this.props;
        return (
            <button style={{
      color: colors.foreground,
      backgroundColor: colors.background
    }}
  >Click Me</button>
            );
    }
  

}
@inject('temp')
@observer
class B extends Component{
    @observable name;
    constructor(props){
        super(props);
        this.name='';
    }
    onEnterName=(event)=>{
        this.name=event.target.value;
    }
    render(){
        let {temp}=this.props;
        return (
            <div>
            <input type='text' style={{backgroundColor:'lightblue'}} defaultValue={this.name} onChange={this.onEnterName}/>
            <C name={this.name} ></C>
            </div>
            );
    }
}
@inject('temp')
@observer
class C extends Component{
    constructor(props){
        super(props);
    }
    

    render(){
        let {name,temp}=this.props;
        return (
            <div>
            <div>{temp}</div>
            <h1 >{name}</h1>
            </div>
            );
    }
}
export default A;