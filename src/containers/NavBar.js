import React from 'react';
import { NavLink } from 'react-router-dom';
import { Grid, Menu } from 'semantic-ui-react';

const NavBar = () => {
  return (
    <Menu id="navbar">
      <Menu.Item> 
        <NavLink className="nav-item" to="/">Home</NavLink>
      </Menu.Item>
      
      <Menu.Item> 
        <NavLink className="nav-item" to="/winter">Winter 2019</NavLink>
      </Menu.Item>
      
      <Menu.Item> 
        <NavLink className="nav-item" to="/spring">Spring 2019</NavLink>
      </Menu.Item> 
      
      <Menu.Item> 
        <NavLink className="nav-item" to="/summer">Summer 2019</NavLink>
      </Menu.Item> 
      
      <Menu.Item> 
        <NavLink className="nav-item" to="/fall">Fall 2018</NavLink>
      </Menu.Item> 
      
      <Menu.Item> 
        <NavLink className="nav-item" to="/signup">Signup</NavLink>
      </Menu.Item>  
      
      <Menu.Item> 
        <NavLink className="nav-item" to="/login">Login</NavLink>
      </Menu.Item> 
    </Menu>
  );
};

export default NavBar;
