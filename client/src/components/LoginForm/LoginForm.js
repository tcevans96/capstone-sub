import React, { Component } from 'react';
import {Link, Redirect} from 'react-router-dom';
import axios from 'axios';
import './LoginForm.scss';

export default class LoginForm extends Component {
    state = {
        currentUser: {},
        users: [],
        isLoginSuccessful: false,
        error: ''
    };

    componentDidMount(){
        axios.get('http://localhost:8080/users')
        .then((response)=>{
            this.setState({
                users: response.data
            })
        }).catch((err) => {
            console.log(err.response.data);
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const {users, currentUser} = this.state;

        const foundUser = users.find((user)=>{
            return user.username === event.target.username.value;
        })
        
        if(foundUser){
            this.setState({currentUser: foundUser})

            if(currentUser.password === event.target.password.value){
                this.setState({isLoginSuccessful: true})
            }else{
                this.setState({error: 'invalid password'})
            }
        }else{
            this.setState({error: 'user not found'})
        }
    }
  
    render() {
        if(this.state.isLoginSuccessful){return <Redirect to='/dashboard'/>}

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
