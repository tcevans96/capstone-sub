import React, { Component } from 'react';

export default class Dashboard extends Component {
    state = {
        currentUser: this.props.location.state.currentUser
    }
  
    render() {
    return <div>Hello {this.state.currentUser.firstName}</div>;
  }
}

