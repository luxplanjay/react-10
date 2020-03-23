import React from 'react';
import AppBar from './AppBar';
import './Layout.css';

const Layout = ({ children }) => (
  <>
    <AppBar />
    <div className="Layout">{children}</div>
  </>
);
export default Layout;
