import React from 'react';
import { Link } from 'react-router-dom'
import './Header.scss';
import menu from '../../assets/icons/bx-menu.svg';
import logout from '../../assets/icons/bx-log-out.svg'

export default function Header() {
  return (
   <header className='header'>
       <img className='header__icon' src={menu} alt="" />
       <h1 className='header__title'>sub</h1>
       <Link to='/' className='header_link'><img className='header__icon' src={logout} alt="" /></Link>
   </header>
  );
}
