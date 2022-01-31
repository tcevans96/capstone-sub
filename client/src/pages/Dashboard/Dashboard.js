import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './Dashboard.scss';
import graph from '../../assets/images/wave-chart.svg'
export default class Dashboard extends Component {

  render() {
    return (
        <div>
            <Header/>
            <main className='dashboard'>
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

