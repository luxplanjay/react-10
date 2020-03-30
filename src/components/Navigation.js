/*
 * TODO: публичные и приватные линки
 */

import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../routes';

const styles = {
  link: {
    display: 'inline-block',
    textDecoration: 'none',
    padding: 12,
    fontWeight: 700,
    color: '#2A363B',
  },
  activeLink: {
    color: '#E84A5F',
  },
};

const Navigation = () => (
  <nav>
    {routes.map(route => (
      <NavLink
        exact={route.exact}
        key={route.label}
        to={route.path}
        style={styles.link}
        activeStyle={styles.activeLink}
      >
        {route.label}
      </NavLink>
    ))}
  </nav>
);

export default Navigation;
