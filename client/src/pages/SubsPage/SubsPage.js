import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import SubscriptionItem from '../../components/SubscriptionItem/SubscriptionItem';
import './SubsPage.scss';
import axios from 'axios';

export default class SubsPage extends Component {
  
  state = {
    subscriptions: []
  }

  componentDidMount(){

    const id = sessionStorage.getItem('currentUserId')

    axios.get('http://localhost:8080/users/' + id)
      .then((response) => {
        this.setState({subscriptions: response.data})
      })

  }

  render() {
    return (
        <div>
            <Header/>
            <main className='subs'>
                <h1>My Subscriptions</h1>
                
                {this.state.subscriptions.map((sub)=>{
                  return <SubscriptionItem key={sub.id} logo={sub.logo} name={sub.name} price={sub.price}/>
                })}
            </main>
            <Footer/>
        </div>
    );
  }
}
