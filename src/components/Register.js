import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css'
import axios from 'axios';
import validator from 'validator';



const Register = () => {
  const [username, setUsername] =useState("");
  const [email, setEmail] = useState("");
  const [password,setPassword] =useState("");
  // const [confirmpassword, setConfirmpassword] = useState("");



  // const [formdata,setFormdata]= useState({
  //   farmname: '',
  //   email: '',
  //   password: '',
  //   confirmpassword: ''
  // })
  const navigate = useNavigate();

 

  const handlesubmit = (e) => {
    e.preventDefault();

    if (!email || !username || !password ) {
      alert('Please fill in all fields.');
      return;
    }

    if (password.length < 8) {
      alert('Password must be at least 8 characters.');
      return;
    }
    if (!validator.isEmail(email)) {
      alert('Invalid email format');
      return;
    }

   
    axios.post('http://localhost:8080/register', { username, email, password })
  .then(result => {
    console.log(result);
    alert('Registration is successful');
    navigate('/');
  })
  .catch(err => {
    console.error(err);
    // Handle the error, e.g., show an alert or log it
  });
}

  return (
    <div>
        <div className='register-page'>
        <div className='form'>
            <div className='register'>
      <form onSubmit={handlesubmit}>
        <div className='register-header'>
        <h1>Register</h1><br/>
        </div>

        <label>Farm Name:</label>
        <input type='text'
         name='farmname'
         value={username}
         placeholder='enter the farm name'
         onChange={(e) => setUsername(e.target.value)}
         required/>
       
       
        <label>Email:</label>
        <input type='email'
         name='email'
         value={email}
         placeholder='enter the email'
         onChange={(e) => setEmail(e.target.value)}
          required/>
         
        <label>Password:</label>
        <input type='password'
         name='password'
         value={password}
         placeholder='********'
         onChange={(e) => setPassword(e.target.value)}
         required />


        {/* <label>Confirm Password:</label>
        <input type='password' 
        name='password'
        value={confirmpassword}
        placeholder='********'
        autoComplete='off'
        onChange={(e) => setConfirmpassword(e.target.value)}
        /> */}
        {/* {formerror && (
                  <p style={{ color: 'red',position:'relative', marginTop:'2px' }}>{formerror}</p>
                )}
         */}
        <button>Register</button>
        <p>Do you have an account? <Link to="/">Login</Link></p>
       
      </form>
      </div>
      </div>
    </div>
    </div>
  );
}

export default Register;
