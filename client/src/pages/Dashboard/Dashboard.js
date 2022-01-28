import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './Dashboard.scss';
export default class Dashboard extends Component {
    state = {
        currentUser: sessionStorage.getItem('currentUserName')
    }

    componentDidMount(){
        
    }

    render() {
    return (
        <div>
            <Header/>
            <main className='dashboard'>
                Hello {this.state.currentUser}
                <div>
                    
                </div>
            </main>
            <Footer/>
        </div>
    );
  }
}

