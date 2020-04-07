
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../logo.svg";
function AppLink() {
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
        {/*<Link to="/car">Car</Link>
        <Link to="/todo">Todo List</Link>
        <Link to="/formComponents">Form Components</Link>
        <Link to="/countryDashboard">Country Dashboard</Link>*/}
      </header>
    </div>
  );
}

export default AppLink;
