import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './LoginForm.scss';

export default class LoginForm extends Component {
    state = {

    };
  
    render() {
        return (
            <main className='login'>
                <form className='form'>
                    <label htmlFor='username'>Username</label>
                    <input className='form__field' name='username' id='username' type="text" />
                    <label htmlFor='password'>Password</label>
                    <input className='form__field' name='password' id='password' type="password" />
                    <button className='form__button'>Log in</button>
                </form>
                <p>
                    Need an account? <Link className='login__redirect' to="/signup">Sign up</Link>
                </p>
            </main>
        );
  }
}
