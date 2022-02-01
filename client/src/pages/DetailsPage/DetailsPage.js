import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Modal from '../../components/Modal/Modal';
import RenewModal from '../../components/RenewModal/RenewModal';
import './DetailsPage.scss';
import axios from 'axios';

export default class DetailsPage extends Component {
  state={
    sub: {},
    isCancelled: false,
    isRenewed: false,
    showModal: false,
    showRenewModal: false
    
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

  handleRenewSub = (name) => {
    
    alert('Subscription Renewed for: ' + this.state.sub.renewDate)
    
    this.setState({
        isRenewed: true
      })
    
  }

  openModal = () => {
    this.setState({showModal:true})
  }

  closeModal = () => {
    this.setState({showModal:false})
  }

  openRenewModal = () => {
    this.setState({showRenewModal:true})
  }

  closeRenewModal = () => {
    this.setState({showRenewModal:false})
  }
  
  render() {
    if(this.state.isCancelled || this.state.isRenewed){return <Redirect to={'/subscriptions/' + sessionStorage.getItem('currentUserId')}/>}
    
    const {name,price,logo,renewDate} = this.state.sub;

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
           <RenewModal
            logo={logo}
            renewDate={renewDate} 
            show={this.state.showRenewModal} 
            close={this.closeRenewModal}
            cancelSub={()=>{this.handleRenewSub(name)}}
          />
            <h1>{name}</h1>
            <img className='details__logo' src={logo} alt="logo" />
            <div className='details__options'>
              <button onClick={this.openRenewModal} className='details__button'>Renew</button>
              <button onClick={this.openModal} className='details__button'>Cancel</button>
            </div>
            <div className='details__history'>
               <h2>History</h2>
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
               <div className='details__container'>
                  <span>February</span>
                  <span>${price}</span>
               </div>
            </div>
        </main>
        <Footer/>
      </div>
    );
  }
}
