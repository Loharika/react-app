
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomePage from "./components/HomePage";
import Assignments from './components/HomePage/Assignments.js';
import Page1 from "./components/Page1";
import TodoList from './components/todo-list/todo-list.js';
import CarList from  './components/CarsList/carList.js';
import FormComponents from './components/formComponents/form.js';
import Components from './components/formComponents/components.js';
import CountryDashboard from './components/Country/countryDashboard/countryDashboard.js';
import ShowCountryData from './components/Country/showCountryData/showCountryData.js';
import EmojiGame from './components/emojiGame/emojiGame/emojiGame.js';
import "./App.css";

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      selectedTheme:'Light Mode',
    }
  }
  onChangeTheme=()=>{
    this.setState(()=>({
      selectedTheme:(this.state.selectedTheme==='Light Mode')?'Dark Mode':'Light Mode'
    }));
  }
  render(){
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/page-1">
          <Page1 />
        </Route>
        <Route exact path="/assignments">
          <Assignments />
        </Route>
        <Route path="/todo">
            <TodoList />
        </Route>
        <Route path="/car">
            <CarList />
        </Route>
        <Route exact path="/formComponents">
            <FormComponents />
        </Route>
        <Route exact path="/formComponents/:formName">
            <Components />
        </Route>
        <Route exact path="/countryDashboard">
            <CountryDashboard selectedTheme={this.state.selectedTheme} onChangeTheme={this.onChangeTheme}/>
        </Route>
        <Route exact path="/countryDashboard/:id">
            <ShowCountryData selectedTheme={this.state.selectedTheme} onChangeTheme={this.onChangeTheme} />
        </Route>
        <Route exact path="/emojiGame">
            <EmojiGame selectedTheme={this.state.selectedTheme} onChangeTheme={this.onChangeTheme}/>
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
        
      </Switch>
    </Router>
  );
  }
}

export default App;
/*import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomePage from "./components/HomePage";
import Page1 from "./components/Page1";

import "./App.css";

const App = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/page-1">
          <Page1 />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
*/