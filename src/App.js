
import React from "react";
import {observer,Provider} from 'mobx-react';
import { BrowserRouter as Router, Switch, Route,Redirect } from "react-router-dom";
import {configure} from 'mobx';

import HomePage from "./components/HomePage";
import Assignments from './components/HomePage/Assignments.js';
import Page1 from "./components/Page1";
import LocalApp from './components/Practice/practice';
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
import GridMemoryGame from './components/GridGame/GridMemoryGame';
import RestTodoApp from './components/RestTodoApp/RestTodoApp/index';
import themeStore from './stores/ThemeStore';
import UsersPage from './components/UsersPage/index';
import TodoAppAPI from './components/TodoAppAPI';
import stores from './stores';
import "./App.css";

import Authentication from './Authentication/Routes';
import ProductsPage from './E_Commerce/Components/ProductsPage';

import E_Commerce from './E_Commerce/Routes';



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

  render(){
  return (
    <Provider {...stores}>
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        
        {Authentication}
        {E_Commerce}
  
  
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
        <Route exact path="/grid-game">
            <GridMemoryGame />
        </Route>
        <Route exact path="/events-app">
            <EventsApp />
        </Route>
        <Route exact path="/app">
            <LocalApp />
        </Route>
        <Route exact path="/rest-todo-app">
            <RestTodoApp />
        </Route>
        <Route exact path="/user-app" component={UsersPage}/>
        <Route exact path="/todo-app-api" component={TodoAppAPI}/>
        
        <Route exact path="/home">
          <HomePage />
        </Route>

      </Switch>
    </Router>
    </Provider>
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