import React from 'react';
import Navigation from './Navigation';
import UserMenu from './UserMenu';

const style = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid #2A363B',
  },
};

const Appbar = () => (
  <header style={style.container}>
    <Navigation />
    <UserMenu />
  </header>
);

export default Appbar;
