import React from 'react';
import './formComponents.css'
import {withRouter} from 'react-router-dom';
class FormComponents extends React.Component{
  gotoLink=(event)=>{
    let {history}=this.props;
    history.push({pathname:`/formComponents/:${event.target.id}`})
  }
  render(){
    return (

        <ul >
            <li onClick={this.gotoLink}>
              <div id="greetings">Greetings</div>
            </li>
            <li onClick={this.gotoLink}>
              <div id="favouriteDessert">Favourite Dessert</div>
            </li>
            <li onClick={this.gotoLink}>
              <div id="visitedCities">Visited Cities</div>
            </li>
            <li onClick={this.gotoLink}>
              <div id="yourState">Your State</div>
            </li>
            <li onClick={this.gotoLink}>
              <div id="disableButton">Disable Button</div>
            </li>
        </ul>
      );
  }
}
export  default withRouter(FormComponents);
/*export default function FormComponents() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
          <li>
              <Link to="/greetings">Greetings</Link>
            </li>
            <li>
              <Link to="/favouriteDessert">Favourite Dessert</Link>
            </li>
            <li>
              <Link to="/visitedCities">Visited Cities</Link>
            </li>
            <li>
              <Link to="/yourState">Your State</Link>
            </li>
            <li>
              <Link to="/disableButton">Disable Button</Link>
            </li>
          </ul>
        </nav>
        <Switch>
        <Route path="/greetings">
            <Greetings />
          </Route>
          <Route path="/favouriteDessert">
            <FavouriteDessert />
          </Route>
          <Route path="/visitedCities">
            <VisitedCities />
          </Route>
          <Route exact path="/yourState">
            <YourState />
          </Route>
          <Route path="/disableButton">
            <DisableButton />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Greetings() {
  return <h2>Home</h2>;
}

function FavouriteDessert() {
  return <h2>About</h2>;
}
function VisitedCities() {
  return <h2>Home</h2>;
}
function YourState() {
  return <h2>Home</h2>;
}
function DisableButton() {
  return <h2>Home</h2>;
}*/


