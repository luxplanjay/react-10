import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { authSelectors } from '../redux/auth';
// import routes from '../routes';

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

const Navigation = ({ isAuthenticated }) => (
  <nav>
    <NavLink to="/" exact style={styles.link} activeStyle={styles.activeLink}>
      Home
    </NavLink>

    {isAuthenticated && (
      <NavLink
        to="/tasks"
        exact
        style={styles.link}
        activeStyle={styles.activeLink}
      >
        Tasks
      </NavLink>
    )}
  </nav>
);

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.isAuthenticated(state),
});

export default connect(mapStateToProps)(Navigation);

// {routes.map(route => (
//   <NavLink
//     exact={route.exact}
//     key={route.label}
//     to={route.path}
// style={styles.link}
// activeStyle={styles.activeLink}
//   >
//     {route.label}
//   </NavLink>
// ))}
