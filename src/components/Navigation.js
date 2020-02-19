import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../routes';

const Navigation = () => (
  <ul>
    <li>
      <NavLink
        className="Navigation-link"
        activeClassName="Navigation-link-active"
        to={routes.home}
        exact
      >
        Home
      </NavLink>
    </li>
    <li>
      <NavLink
        className="Navigation-link"
        activeClassName="Navigation-link-active"
        to={routes.shows}
      >
        Shows
      </NavLink>
    </li>
  </ul>
);

export default Navigation;
