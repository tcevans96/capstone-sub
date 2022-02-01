import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import SubscriptionItem from '../../components/SubscriptionItem/SubscriptionItem';
import './SubsPage.scss';
import axios from 'axios';

export default class SubsPage extends Component {
  
  state = {
    subscriptions: [],
    totalMonthlyFees: 0,
    isLoaded: false

  }

  componentDidMount(){

    const id = sessionStorage.getItem('currentUserId')

    axios.get('http://localhost:8080/users/' + id)
      .then((response) => {
        this.setState({subscriptions: response.data, isLoaded:true})
    })

    if(this.state.isLoaded){
      this.getMonthlyFees();
    }
  }

  getMonthlyFees = () => {
      let monthlyFees = 0;
      let subs = this.state.subscriptions;

      for(let i = 0; i < subs.length; i++){
        monthlyFees += subs[i].price;
      }
      
      return monthlyFees.toFixed(2);
  }

  render() {
    
    return (
        <div>
            <Header/>
            <main className='subs'>
                <h1>My Subscriptions</h1>
                <div className='subs__fees'>
                  <span>Total Monthly Fees: </span>
                  <span>${this.getMonthlyFees()}</span>
                </div>
                {this.state.subscriptions.map((sub)=>{
                  return <SubscriptionItem key={sub.id} logo={sub.logo} name={sub.name} price={sub.price}/>
                })}
            </main>
            <Footer/>
        </div>
    );
  }
}
