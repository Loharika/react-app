import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
class AppLinks extends React.Component{
  constructor(props){
    super(props);
    
  }
  render(){
    return (
      <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/todo">Todo List</Link>
            </li>
            <li>
              <Link to="/countries">Countries</Link>
            </li>
            <li>
              <Link to="/car">Car List</Link>
            </li>
            <li>
              <Link to="/formComponents">Form Components</Link>
            </li>
            <li>
              <Link to="/countryDashboard">Country Dashboard</Link>
            </li>
          </ul>
        </nav>
  );
  }
}
export default AppLinks;