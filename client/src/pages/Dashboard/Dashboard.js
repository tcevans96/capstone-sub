import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './Dashboard.scss';
import graph from '../../assets/images/wave-chart-2.svg'
export default class Dashboard extends Component {

  render() {
    return (
        <div>
            <Header/>
            <main className='dashboard'>
                <div className='dashboard__top'>
                    <h2 className='dashboard__title'>This Month's Spend for {sessionStorage.getItem('currentUserName')} </h2>
                    <h1 className='dashboard__price'>$543.18</h1>
                    <span>Discover Card XXXX 5812</span>
                </div>
                <img className='dashboard__graph' src={graph} alt="graph" />
                <div className='dashboard__container'>
                    <div className='dashboard__summary'>
                        <h2>Spending Summary</h2>
                        <div className='dashboard__line'>
                            <span>Mastercard</span>
                            <span>$1,236.20</span>
                        </div>
                        <div className='dashboard__line'>
                            <span>Discover</span>
                            <span>$543.18</span>
                        </div>
                        <div className='dashboard__line'>
                            <span>SSFCU</span>
                            <span>$116.76</span>
                        </div>
                        <div className='dashboard__line'>
                            <span>Capital One</span>
                            <span>$891.30</span>
                        </div>
                    </div>
                </div>
            </main>
            <Footer/>
        </div>
    );
  }
}

