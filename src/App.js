
import React from "react";
import {observer} from 'mobx-react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {configure} from 'mobx';

import HomePage from "./components/HomePage";
import Assignments from './components/HomePage/Assignments.js';
import Page1 from "./components/Page1";
import TodoApp from './components/TodoApp/todoApp';
import CarList from  './components/CarsList/carList.js';
import FormComponents from './components/formComponents/form.js';
import Components from './components/formComponents/components.js';
import CountryDashboard from './components/Country/countryDashboard/countryDashboard.js';
import ShowCountryData from './components/Country/showCountryData/showCountryData.js';
import EmojiGame from './components/emojiGame/emojiGame/emojiGame.js';
import CounterPage from './components/CounterPage/index.js';
import CounterApp from './components/assignment-6/index.js';
import MobxTodoApp from './components/MobxTodo/MobxTodoApp/index';
import EventsApp from './components/EventsApp/EventApp/index';

import themeStore from './stores/ThemeStore'

import "./App.css";

configure({enforceActions:'never'});


@observer
class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      selectedTheme:'Light Mode',
    };
  }
  
  getCurrentTheme=()=>{
  return themeStore.selectedTheme;
    
  }
  setCurrentTheme=(theme)=>{
    themeStore.updateCurrentTheme(theme);
  
  }
  
  onChangeTheme=()=>{
      selectedTheme:(this.getCurrentTheme()==='Light Mode')?this.setCurrentTheme('Dark Mode'):this.setCurrentTheme('Light Mode');
  }
  /*onChangeTheme=()=>{
    this.setState(()=>({
      selectedTheme:(this.state.selectedTheme==='Light Mode')?'Dark Mode':'Light Mode'
    }));
  }*/
  render(){
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/counter-page">
          <CounterPage />
        </Route>
        <Route exact path="/counter-app">
          <CounterApp />
        </Route>
        <Route exact path="/page-1">
          <Page1 />
        </Route>
        <Route exact path="/assignments">
          <Assignments />
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
            <CountryDashboard selectedTheme={this.getCurrentTheme()} onChangeTheme={this.onChangeTheme}/>
        </Route>
        <Route exact path="/countryDashboard/:id">
            <ShowCountryData selectedTheme={this.getCurrentTheme()} onChangeTheme={this.onChangeTheme} />
        </Route>
        <Route exact path="/emojiGame">
            <EmojiGame selectedTheme={this.getCurrentTheme()} onChangeTheme={this.onChangeTheme}/>
        </Route>
        <Route exact path="/todo-app">
            <TodoApp />
        </Route>
        <Route exact path="/mobx-store-todo-app">
            <MobxTodoApp />
        </Route>
        <Route exact path="/events-app">
            <EventsApp />
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


//we can export the observer like 
  // export default observer(App) without defining above the class
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