import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './DiscoverPage.scss';

export default class DiscoverPage extends Component {
  
  
  
    render() {
    return (
        <>
        <Header/>
        <main className='discover'>
            Discover Page
        </main>
        <Footer/>
        </>
    );
  }
}
