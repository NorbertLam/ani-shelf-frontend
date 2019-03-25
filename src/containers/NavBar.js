import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav id="navbar">
      <NavLink className="nav-item" to="/">Home</NavLink>
      <NavLink className="nav-item" to="/winter">Winter <br/> <span className="nav-item-year">2019</span></NavLink>
      <NavLink className="nav-item" to="/spring">Spring <br/> <span className="nav-item-year">2019</span></NavLink>
      <NavLink className="nav-item" to="/summer">Summer <br/> <span className="nav-item-year">2019</span></NavLink>
      <NavLink className="nav-item" to="/fall">Fall <br/> <span className="nav-item-year">2018</span></NavLink>
      <NavLink className="nav-item" to="/signup">Sign up</NavLink>
      <NavLink className="nav-item" to="/login">Log in</NavLink>
    </nav>
  );
};

export default NavBar;
