import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navigation.css';
import { UilUser } from '@iconscout/react-unicons';

function Navigation() {
  return (
    <div className="navbar">
      <div className="container">
        <div className="nav-left">
          <h2 className="logo">Bookstore CMS</h2>
          <Link to="/" className="home">
            Books
          </Link>
          <Link to="/categories" className="categories">
            Categories
          </Link>
        </div>
        <UilUser size="30" color="#0290ff" />
      </div>
    </div>
  );
}

export default Navigation;
