import React from 'react';
import Appbar from './Appbar';

const styles = {
  maxWidth: 1170,
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingRight: 12,
  paddingLeft: 12,
};

const Layout = ({ children }) => (
  <div style={styles}>
    <Appbar />
    <hr />
    {children}
  </div>
);

export default Layout;
