import React from 'react';
import {Link} from 'react-router-dom';
import './Footer.scss';
import home from '../../assets/icons/bx-home.svg';
import discover from '../../assets/icons/bx-paper-plane.svg'
import calendar from '../../assets/icons/bx-calendar.svg'

const id = sessionStorage.getItem('currentUserId')

export default function Footer() {
  return (
    <footer className='footer'>
        <Link to='/dashboard' className='footer__link'>
            <img className='footer__icon' src={home} alt="dashboard icon" />
            <span className='footer__page'>Dashboard</span>
        </Link>
        <Link to='/discover' className='footer__link'>
            <img className='footer__icon' src={discover} alt="dashboard icon" />
            <span className='footer__page'>Discover</span>
        </Link>
        <Link to={'/subscriptions/' + id} className='footer__link'>
            <img className='footer__icon' src={calendar} alt="dashboard icon" />
            <span className='footer__page'>Subscriptions</span>
        </Link>
    </footer>
  );
}
