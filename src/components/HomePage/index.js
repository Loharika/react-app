
import React from "react";
import { Link,Redirect } from "react-router-dom";
import logo from "../../logo.svg";
//function AppLink() {
class AppLink extends React.Component{
  
  
render(){
 
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Link to="/page-1">Page</Link>
        <Link to="/assignments">Assignments</Link>
      </header>
    </div>
  );
}
  
}

export default AppLink;
