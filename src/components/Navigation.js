import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <div>
      <h2>Bookstore CMS</h2>
      <Link to="/">Home</Link>
      <Link to="/categories">Categories</Link>
      <button type="button">Profile Icon</button>
    </div>
  );
}

export default Navigation;
