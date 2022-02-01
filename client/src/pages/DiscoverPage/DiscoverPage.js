import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import SubscriptionList from '../../components/SubscriptionList/SubscriptionList';
import './DiscoverPage.scss';
import axios from 'axios';

export default class DiscoverPage extends Component {
  
    state = {
        subscriptions: [],
        isFiltered:false,
        filteredList: []
    }

    componentDidMount(){
        axios.get('http://localhost:8080/subscriptions')
        .then((response) => {
            this.setState({
                subscriptions: response.data
            })
        })
    }

    handleCategory = (event) =>{
        event.preventDefault();

        const subs = this.state.subscriptions
        
        if(event.target.category.value === 'all'){
            this.setState({isFiltered:false})
            return subs;
        }
        
        const categoryArr = subs.filter(sub => sub.category === event.target.category.value);
        this.setState({filteredList: categoryArr, isFiltered:true})

        return categoryArr;
        
    }
  
    render() {
        const {subscriptions,isFiltered,filteredList} = this.state;
    return (
        <>
        <Header/>
        <main className='discover'>
            <h1>Discover Subscriptions</h1>
            <form className='discover__input' onSubmit={this.handleCategory}>
                <select className='discover__category' name='category' id='category'>
                    <option value="all" >All</option>
                    <option value="entertainment" >Entertainment</option>
                    <option value="software" >Software</option>
                    <option value="services" >Services</option>
                    <option value="insurance" >Insurance</option>
                </select>
                <button className='discover__button'>Apply</button>
            </form>
            <SubscriptionList subs={isFiltered ? filteredList : subscriptions}/>
        </main>
        <Footer/>
        </>
    );
  }
}
