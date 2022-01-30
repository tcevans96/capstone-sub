import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './DetailsPage.scss';

export default class DetailsPage extends Component {
  render() {
    return (
      <div>
        <Header/>
        <main className='details'>
            <h1>Hello</h1>
            <img src={this.props.logo} alt="" />
        </main>
        <Footer/>
      </div>
    );
  }
}
