
import React from "react";
import { Link } from "react-router-dom";

function Assignments() {
  return (
    <div className="font-bold flex flex-col justify-center items-start ml-40 h-screen w-screen text-indigo-900">
    <div className='text-4xl text-blue-500'>Assignments</div>
        <Link to="/page-1">Page 1</Link>
        <Link to="/car">Car</Link>
        <Link to="/todo">Todo List</Link>
        <Link to="/formComponents">Form Components</Link>
        <Link to="/countryDashboard">Country Dashboard</Link>
        <Link to="/emojiGame">Emoji Game</Link>
    </div>
  );
}

export default Assignments;
