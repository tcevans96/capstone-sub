import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './Dashboard.scss';
export default class Dashboard extends Component {
    state = {
        currentUser: this.props.location.state.currentUser
    }
  
    render() {
    return (
        <div>
            <Header/>
            <main className='dashboard'>
                Hello {this.state.currentUser.firstName}
                <div>
                    
                </div>
            </main>
            <Footer/>
        </div>
    );
  }
}

