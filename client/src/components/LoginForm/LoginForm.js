import React, { Component } from 'react';
import {Link, Redirect} from 'react-router-dom';
import axios from 'axios';
import './LoginForm.scss';
import errorIcon from '../../assets/icons/error-24px.svg'

export default class LoginForm extends Component {
    state = {
        currentUser: {},
        users: [],
        isLoginSuccessful: false,
        error: 0
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

        const {users} = this.state;

        const foundUser = users.find((user)=>{
            return user.username === event.target.username.value;
        })

        
        if(foundUser){
            this.setState({currentUser: foundUser})
            
            if(foundUser.password === event.target.password.value){
                
                this.setState({isLoginSuccessful: true})
                sessionStorage.setItem('currentUserId', foundUser.id);
                sessionStorage.setItem('currentUserName', foundUser.firstName);
            }
            else{this.setState({error: 1})}
        }
        else{this.setState({error: 2})}

        event.target.reset();
    }
  
    render() {
        const {error, isLoginSuccessful, currentUser} = this.state;

        if(isLoginSuccessful && currentUser){
            
            return <Redirect to={{pathname: '/dashboard', state: {currentUser: currentUser}}}/>
        }

        return (
            <main className='login'>
                <form className='form' onSubmit={this.handleSubmit}>
                    <label htmlFor='username'>Username</label>
                    <input className='form__field' name='username' id='username' type="text" />
                    <label htmlFor='password'>Password</label>
                    <input className='form__field' name='password' id='password' type="password" />
                    <button className='form__button'>Log In</button>
                </form>

                <span className={error === 1 ? 'login__error--shown' : 'login__error'}> <img className='login__error--icon' src={errorIcon} alt="error" /> INVALID PASSWORD! PLEASE TRY AGAIN.</span>
                <span className={error === 2 ? 'login__error--shown' : 'login__error'}> <img className='login__error--icon' src={errorIcon} alt="error" /> USER NOT FOUND! PLEASE TRY AGAIN.</span>
                
                <p>Need an account? <Link className='login__redirect' to="/signup">Sign up</Link></p>
            </main>
        );
  }
}
