import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './DetailsPage.scss';
import axios from 'axios';

export default class DetailsPage extends Component {
  state={
    sub: {} 
  }

  componentDidMount(){
    const subName = this.props.match.params.name;
    console.log(subName);
    axios.get(`http://localhost:8080/users/subs/${subName}`)
    .then((response)=>{
      this.setState({sub:response.data[0]})
    })
  }

  handleCancelSub(){
    axios.delete()
  }
  
  render() {
    const {name,price,logo} = this.state.sub;

    return (
      <div>
        <Header/>
        <main className='details'>
            <h1>{name}</h1>
            <img className='details__logo' src={logo} alt="logo" />
            <div className='details__options'>
              <button className='details__button'>Renew</button>
              <button className='details__button'>Cancel</button>
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
