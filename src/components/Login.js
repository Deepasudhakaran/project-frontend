import React, { useState } from 'react';
import './Login.css'
import { Link, useNavigate, } from 'react-router-dom';
import axios from 'axios';


const Login = ({ setToken }) => {

  const [email,setEmail]=useState('');
  const[password,setPassword] =useState('');
  const navigate = useNavigate();
  
  axios.defaults.withCredentials = true;


  
  // Assume you have a state variable for email and password

const handleLogin = (e) => {
  e.preventDefault();

  if (!email || !password) {
    alert('Please fill in all fields.');
    return;
  }

  if (password.length < 8) {
    alert('Password must be at least 8 characters.');
    return;
  }

  axios.post('http://localhost:8080/login', { email, password })
    .then(result => {
      console.log(result);

      if (result.data.status === "Success") {
        const role = result.data.role;

        alert('Login is successful');

        if (role === "admin") {
          navigate('/home', { replace: true });
        } else if (role === "user") {
          navigate('/userhome', { replace: true });
        } else {
          alert('Invalid role');
        }
      } else {
        alert('Login failed: ' + result.data.error);
      }
    })
    .catch(error => {
      console.error('Login error:', error);

      // Handle errors more gracefully here
      alert('An error occurred during login. Please try again later.');
    });
};

  

  return (
    <div className='login-page '>
        <div className='login'>
            <div className='form'>
      <form onSubmit={handleLogin}>
        <h2>Login</h2><br/>

        <label>Email</label>
        <input 
         type='email'
         name='email'
         value={email}
         placeholder='enter the email'
         onChange={(e) => setEmail(e.target.value)}
         required/>
         

        <label>Password</label>
        <input 
        type='password'
        name='password'
        value={password} 
        placeholder='enter the password'
        onChange={(e)=> setPassword(e.target.value)}
        required/>
       
        <button>Login</button>
        <p>Don't have an account? <Link to="/register">Register</Link></p>
      </form>
      </div>
      </div>
    </div>
  );
}

export default Login;
