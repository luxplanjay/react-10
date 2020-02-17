import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../routes';

const Navigation = () => (
  <ul>
    <li>
      <NavLink
        exact
        to={routes.home}
        className="Navigation-link"
        activeClassName="Navigation-link-active"
      >
        Home
      </NavLink>
    </li>
    <li>
      <NavLink
        to={routes.shows}
        className="Navigation-link"
        activeClassName="Navigation-link-active"
      >
        Shows
      </NavLink>
    </li>
  </ul>
);

export default Navigation;
