import React from 'react';
import './Header.scss';
import menu from '../../assets/icons/bx-menu.svg';
import settings from '../../assets/icons/bx-cog.svg';

export default function Header() {
  return (
   <header className='header'>
       <img src={menu} alt="" />
       <h1 className='header__title'>sub</h1>
       <img src={settings} alt="" />
   </header>
  );
}
