import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav id="navbar">
      <NavLink className="nav-item" to="/">Home</NavLink>
      <NavLink className="nav-item" to="/winter">Winter 2019</NavLink>
      <NavLink className="nav-item" to="/spring">Spring 2019</NavLink>
      <NavLink className="nav-item" to="/summer">Summer 2019</NavLink>
      <NavLink className="nav-item" to="/fall">Fall 2018</NavLink>
      <NavLink className="nav-item" to="/signup">Signup</NavLink>
      <NavLink className="nav-item" to="/login">Login</NavLink>
    </nav>
  );
};

export default NavBar;
