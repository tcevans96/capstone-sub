import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import SubscriptionList from '../../components/SubscriptionList/SubscriptionList';
import './DiscoverPage.scss';
import axios from 'axios';

export default class DiscoverPage extends Component {
  
    state = {
        subscriptions: []
    }

    componentDidMount(){
        axios.get('http://localhost:8080/subscriptions')
        .then((response) => {
            this.setState({
                subscriptions: response.data
            })
        })
    }
  
    render() {
    return (
        <>
        <Header/>
        <main className='discover'>
            <h1>Discover Subscriptions</h1>
            <SubscriptionList subs={this.state.subscriptions}/>
        </main>
        <Footer/>
        </>
    );
  }
}
