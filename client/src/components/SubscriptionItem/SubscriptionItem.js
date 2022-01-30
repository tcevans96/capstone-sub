import axios from 'axios';
import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './SubscriptionItem.scss'

export default class SubscriptionItem extends Component {
  
  state = {
    isDiscoverPage: false,
    
  }


  handleCancelSub = (event) => {
    axios.delete('http://localhost:8080/delete', {id:this.props.id})
    .then()
  }
  
  handleAddSub = (event) => {

      const {logo,name,price,category} = this.props;
      const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", "January"];
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

  componentDidMount(){
    let pathname = window.location.href;
    if( pathname.includes('discover')){
      this.setState({
        isDiscoverPage: true
      })
    }
  }
 
  render() {
    const {logo,name,price} = this.props;
  
    
    return( 
    <div  className='sub-item'>
      <img className='sub-item__logo' src={logo} alt="company logo" />
      <span>{name}</span>
      <span>${price}</span>
      {this.state.isDiscoverPage ? <button onClick={this.handleAddSub}>+</button> : <Link  className='sub-item__link' to={'/details/' + name}>X</Link>}
    </div>);
  }
}
