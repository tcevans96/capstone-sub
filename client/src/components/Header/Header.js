import React from 'react';
import './Header.scss';
import menu from '../../assets/icons/bx-menu.svg';
import settings from '../../assets/icons/bx-cog.svg';

export default function Header() {
  return (
   <header className='header'>
       <img className='header__icon' src={menu} alt="" />
       <h1 className='header__title'>sub</h1>
       <img className='header__icon' src={settings} alt="" />
   </header>
  );
}
