import React from 'react';
import { Link } from 'react-router-dom';
import './header.scss';
import Search from '../search';

const Header = () => (
  <div className="topnav">
    <Link to="/">Home</Link>
    <Link to="/bookmarks">Bookmarks</Link>
    <Search />
  </div>
);

export default Header;
