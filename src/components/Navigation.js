import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../routes';
import './Navigation.css';

const Navigation = () => (
  <nav className="Navigation">
    {routes.map(route => (
      <NavLink
        key={route.label}
        to={route.path}
        className="Navigation-link"
        activeClassName="Navigation-link--active"
      >
        {route.label}
      </NavLink>
    ))}
  </nav>
);

export default Navigation;
