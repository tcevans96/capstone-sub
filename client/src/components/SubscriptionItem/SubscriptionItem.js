import axios from 'axios';
import React, { Component } from 'react';
import './SubscriptionItem.scss'

export default class SubscriptionItem extends Component {
  
  handleAddSub = (event) => {
      console.log(this.props.name);
      const {logo,name,price,category} = this.props;
      const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      const d = new Date();
      let month = months[d.getMonth()+1] ;
      let day = d.getDate()

      axios.post(`http://localhost:8080/users/subs`,{
          name: name,
          category: category,
          logo: logo,
          price: price,
          renewDate: (month + ' ' + day),
          user_id: parseInt(sessionStorage.getItem('currentUserId')),
          
      })
  }
  
  render() {
    const {logo,name,price} = this.props;
    
    return( 
    <button onClick={this.handleAddSub} className='sub-item'>
      <img className='sub-item__logo' src={logo} alt="company logo" />
      <span>{name}</span>
      <span>${price}</span>
    </button>);
  }
}
