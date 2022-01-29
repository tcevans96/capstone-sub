import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './SubsPage.scss';

export default class SubsPage extends Component {
  render() {
    return (
        <div>
            <Header/>
            <main className='subs'>
                <h1>My Subscriptions</h1>
            </main>
            <Footer/>
        </div>
    );
  }
}
