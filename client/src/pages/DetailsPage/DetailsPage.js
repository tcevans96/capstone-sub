import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Modal from '../../components/Modal/Modal';
import './DetailsPage.scss';
import axios from 'axios';

export default class DetailsPage extends Component {
  state={
    sub: {},
    isCancelled: false,
    showModal: false,
    
  }

  componentDidMount = () => {
    let subName = this.props.match.params.name;
    console.log(subName);
    axios.get(`http://localhost:8080/users/subs/${subName}`)
    .then((response)=>{
      this.setState({sub:response.data[0]})
    })
  }

  handleCancelSub = (name) => {
    
    axios.delete(`http://localhost:8080/users/subs/${name}`)
    .then(()=>{
      alert('Subscription Cancelled')
      this.setState({
        isCancelled: true
      })
    })
  }

  openModal = () => {
    this.setState({showModal:true})
  }

  closeModal = () => {
    this.setState({showModal:false})
  }
  
  render() {
    if(this.state.isCancelled){return <Redirect to={'/subscriptions/' + sessionStorage.getItem('currentUserId')}/>}
    
    const {name,price,logo} = this.state.sub;

    return (
      <div>
        <Header/>
        <main className='details'>
          <Modal
            logo={logo} 
            show={this.state.showModal} 
            close={this.closeModal}
            cancelSub={()=>{this.handleCancelSub(name)}}
          />
            <h1>{name}</h1>
            <img className='details__logo' src={logo} alt="logo" />
            <div className='details__options'>
              <Link className='details__button' to={'/subscriptions/' + sessionStorage.getItem('currentUserId')}>Renew</Link>
              <button onClick={this.openModal} className='details__button'>Cancel</button>
            </div>
            <div className='details__history'>
               <h2>History</h2>
               <div className='details__container'>
                  <span>October</span>
                  <span>${price}</span>
               </div>
               <div className='details__container'>
                  <span>November</span>
                  <span>${price}</span>
               </div>
               <div className='details__container'>
                  <span>December</span>
                  <span>${price}</span>
               </div>
               <div className='details__container'>
                  <span>January</span>
                  <span>${price}</span>
               </div>
            </div>
        </main>
        <Footer/>
      </div>
    );
  }
}
