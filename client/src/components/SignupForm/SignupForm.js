import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './SignupForm.scss'

export default class SignupForm extends Component {
    
    state = {

    }

    render() {
        return (
            <main className='signup'>
                <form className='form'>
                    <label htmlFor='firstName'>First Name</label>
                    <input className='form__field' name='firstName' id='firstName' type="text" />
                    <label htmlFor='lastName'>Last Name</label>
                    <input className='form__field' name='lastName' id='lastName' type="text" />
                    <label htmlFor='username'>Username</label>
                    <input className='form__field' name='username' id='username' type="text" />
                    <label htmlFor='password'>Password</label>
                    <input className='form__field' name='password' id='password' type="password" />
                    <label htmlFor='confirmPassword'>Confirm Password</label>
                    <input className='form__field' name='confirmPassword' id='confirmPassword' type="password" />
                    <button className='form__button'>Sign Up</button>
                </form>
                <p>
                    Already have an account? <Link className='signup__redirect' to="/login">Log in</Link>
                </p>
            </main>
        );
    }
}
