import React from 'react';
import { Link } from 'react-router-dom';
import './Logo.css';

const Logo = () => (
  <Link to="/tasker" className="Logo">
    <span role="img" aria-label="piggy">
      🐷
    </span>
  </Link>
);

export default Logo;
