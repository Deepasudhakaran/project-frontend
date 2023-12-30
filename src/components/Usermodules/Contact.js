import React from 'react';
import Navbar from './Navbar';
import './Contact.css'


const Contact = () => {
  return (
    <div>
        <Navbar/>
       
        <div className='top'>
          <div className='contact'>
            <div className='contact-form'>
      <form>
        <h2>Contact Us</h2><br/>
        <label>UserName:</label>
        <input type='text' name='username'/><br/>
        <label>Email:</label>
        <input type='email' name='email'/><br/>
        <label>Message:</label>
        <textarea rows={4} cols={45}>
        </textarea><br/><br/>
        <button  className='cbn'>submit</button>
      </form>
      </div>
      </div>
      </div>
    
    </div>
  );
}

export default Contact;
