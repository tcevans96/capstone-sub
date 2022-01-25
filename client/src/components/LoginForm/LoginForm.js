import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import './LoginForm.scss';

export default class LoginForm extends Component {
    state = {

    };

    handleSubmit = (event) => {
        event.preventDefault();

        axios.get()
    }
  
    render() {
        return (
            <main className='login'>
                <form className='form' onSubmit={this.handleSubmit}>
                    <label htmlFor='username'>Username</label>
                    <input className='form__field' name='username' id='username' type="text" />
                    <label htmlFor='password'>Password</label>
                    <input className='form__field' name='password' id='password' type="password" />
                    <button className='form__button'>Log In</button>
                </form>
                <p>
                    Need an account? <Link className='login__redirect' to="/signup">Sign up</Link>
                </p>
            </main>
        );
  }
}
