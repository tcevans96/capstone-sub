import React from 'react';
import {Link} from 'react-router-dom'
import Logo from '../../assets/icons/sub-logo.png'
import './LoginPage.scss'

export default function LoginPage() {
  return (
    <div className='login'>
        <img className='login__logo' src={Logo} alt="Sub Logo" />
        <Link className='login__button login__button--login' to='/login'>Log In</Link>
        <Link className='login__button login__button--signup' to='/signup'>Sign Up</Link>
    </div>
  );
}
