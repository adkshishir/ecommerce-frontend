import React, { useContext } from 'react';
import { TopBar } from './TopBar';
import NavBar from './NavBar';
import { homeDataResponseType } from '../types/types';
const Header = () => {
  return (
    <header>
      <TopBar />
      <NavBar />
    </header>
  );
};

export default Header;
