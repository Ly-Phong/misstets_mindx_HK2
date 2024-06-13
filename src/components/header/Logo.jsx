import React from 'react';
import './style.css';
import Menubar from './Menubar';
import Search from './Search';

const Logo = () => {
  return (
    <div className="logo_container">
      <h2 className='itm_logo'>Anonime</h2>
      <Menubar />
      <Search />
    </div>
  );
}

export default Logo;
