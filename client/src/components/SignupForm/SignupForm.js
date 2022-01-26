import React, { Component } from 'react';
import {Link, Redirect} from 'react-router-dom';
import axios from 'axios';
import './SignupForm.scss'
import errorIcon from '../../assets/icons/error-24px.svg'

export default class SignupForm extends Component {
    
    state = {
        successful: false,
        isValidPassword: false,
        error: 0
    }

    handleSubmit = (event) => {
        event.preventDefault();

        if(event.target.password.value === event.target.confirmPassword.value){
            axios.post('http://localhost:8080/users',{
                firstName: event.target.firstName.value,
                lastName: event.target.lastName.value,
                username: event.target.username.value,
                password: event.target.password.value,
            })
            .then(()=>{
                this.setState({
                    successful: true,
                    isValidPassword: true
                })   
            })
        }else{
            this.setState({error: 1})
        }

        event.target.reset();
    }

    render() {
        const {error, successful} = this.state;
        
        if(successful){return <Redirect to='/' />}
        
        return (
            <main className='signup'>
                <form className='form' onSubmit={this.handleSubmit}>
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
                
                <span className={error === 1 ? 'signup__error--shown' : 'signup__error'}> <img className='signup__error--icon' src={errorIcon} alt="error" /> PASSWORDS DO NOT MATCH!</span>

                <p>Already have an account? <Link className='signup__redirect' to="/login">Log in</Link></p>
            </main>
        );
    }
}
