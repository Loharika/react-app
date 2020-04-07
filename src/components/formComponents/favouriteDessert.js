import React from 'react';
import NavBar from './navBar.js';

class FavouriteDessert extends React.Component{
    constructor(){
        super();
        this.state={dessertName:'',displayDessert:''}
    }
    dessertName=(event)=>{
        let dessert=event.target.value
        //alert(event.target.value);
        this.setState(()=>({
            dessertName:dessert
        }));
    }
    displayDesserts=(event)=>{
        if(this.state.dessertName.length>0){
            this.setState(()=>({
            displayDessert:`My favourite Dessert is ${this.state.dessertName}`
        }));
        }
        else{
            this.setState(()=>({
            displayDessert:''
        }));
        }
        
    }
  render(){
    return (
      <div className='favourite-dessert-main'>
            <NavBar history={this.props.history} nameOnNavBar={'Favourite Dessert'}/>
            <form onSubmit={this.displayDesserts} className='dessert-list'>
            <div>
                <div className="each-dessert">
                <input type="radio" name="eachDessert" id="vanilla" value="VANILLA" onChange={this.dessertName}/>
                <label for="vanilla">Vanilla</label>
                </div>
                <div className="each-dessert">
                <input type="radio" name="eachDessert" id="ButterScotch" value="BUTTERSCOTCH" onChange={this.dessertName}/>
                <label for="ButterScotch">ButterScotch</label>
                </div>
                <div className="each-dessert">
                <input type="radio" name="eachDessert" id="GulabJamun" value="GULAB JAMUN" onChange={this.dessertName}/>
                <label for="GulabJamun">Gulab Jamun</label>
                </div>
                <div className="each-dessert">
                <input type="radio" name="eachDessert" id="YoghurtPots" value="YOGURT POTS" onChange={this.dessertName}/>
                <label for="YoghurtPots">Yoghurt Pots</label>
                </div>
                <div className="each-dessert">
                <input type="radio" name="eachDessert" id="BakedBanana" value="BAKED BANANA" onChange={this.dessertName}/>
                <label for="BakedBanana">BakedBanana</label>
                </div>
                <div className="each-dessert">
                <input type="radio" name="eachDessert" id="Chocolate" value="chocolate" onChange={this.dessertName}/>
                <label for="Chocolate">Chocolate</label>
                </div>
                <div><input type="submit" value='Make your Choice'/></div>
                </div>
                <span>{this.state.displayDessert}</span>
            
            </form>
        </div>
      );
  }
}
export default FavouriteDessert;