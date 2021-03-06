
import React from "react";
import {observer,Provider} from 'mobx-react';
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import {configure} from 'mobx';

import HomePage from "./components/HomePage";
import Assignments from './components/HomePage/Assignments.js';
import Dashboard from './components/CountryDashboard/Dashboard';
import ShowCountryDetails from './components/CountryDashboard/ShowCountryDetails';
import TodoApp from './components/TodoApp/todoApp';
import CarList from  './components/CarsList/carList.js';
import FormComponents from './components/formComponents/form.js';
import Components from './components/formComponents/components.js';
import EmojiGame from './components/emojiGame/emojiGame/emojiGame.js';
import CounterPage from './components/CounterPage/index.js';
import CounterApp from './components/assignment-6/index.js';
import MobxTodoApp from './components/MobxTodo/MobxTodoApp/index';
import GridMemoryGame from './components/GridGame/GridMemoryGame';
import RestTodoApp from './components/RestTodoApp/RestTodoApp/index';
import UsersPage from './components/UsersPage/index';
import stores from './stores';
import {ProtectedRoute} from './common/ProtectedRoute';
import Sample from './components/Practice/practice.js';
import Authentication from './Authentication/Routes';
import E_Commerce from './E_Commerce/Routes';
import PracticeAdvancedConceptsRoute from './common/routes';

import "./App.css";


configure({enforceActions:'never'});

@observer
class App extends React.Component{

  render(){
  return (
    <Provider {...stores}>
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
      
        {Authentication}
        {E_Commerce}
        <ProtectedRoute exact path='/counter-page' component={CounterPage} />
        <ProtectedRoute exact path="/counter-app" component={CounterApp}/>
        <ProtectedRoute exact path="/car" component={CarList}/>
        <ProtectedRoute exact path="/formComponents" component={FormComponents}/>
        <ProtectedRoute exact path="/formComponents/:formName" component={Components}/>
        <ProtectedRoute exact path="/emojiGame" component={EmojiGame}/>
        <ProtectedRoute exact path="/todo-app" component={TodoApp}/>
        <ProtectedRoute exact path="/mobx-store-todo-app" component={MobxTodoApp}/>
        <ProtectedRoute exact path="/grid-game" component={GridMemoryGame}/>
        <ProtectedRoute exact path="/rest-todo-app" component={RestTodoApp}/>
        <ProtectedRoute exact path="/user-app" component={UsersPage}/>
        <ProtectedRoute exact path="/countryDashboard" component={Dashboard}/>
        <ProtectedRoute exact path={`/countriesDashboardApp/:alpha3Code`} component={ShowCountryDetails}/>
        <Route exact path='/practice-advanced-concepts' component={PracticeAdvancedConceptsRoute}/>
        <Route exact path='/sample' component={Sample}/>
        <Route exact path="/assignments" component={Assignments}/>
        <Route exact path="/" component={HomePage}/>
      </Switch>
    </Router>
    </Provider>
  );
  }
}

export default App;

//<ProtectedRoute exact path="/app" component={LocalApp}/>
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