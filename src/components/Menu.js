import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => {
  return (
    <ul>
      <li>
        <NavLink
          to="/"
          activeClassName="active">
          Home
        </NavLink>/
      </li>
      <li>
        <NavLink
          to="/band"
          activeClassName="active">
          The Band
        </NavLink>/
      </li>
      <li>
        <NavLink
          to="/people"
          activeClassName="active">
          The People
        </NavLink>/
      </li>
      <li>
        <NavLink
          to="/music"
          activeClassName="active">
          The Music
        </NavLink>/
      </li>
      <li>
        <NavLink
          to="/contact"
          activeClassName="active">
          Contact
        </NavLink>/
      </li>
    </ul>
  )
}

export default Menu;
