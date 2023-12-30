import React from 'react';
import Navbar from './Navbar';

import './Userhome.css'




const Userhome = () => {
  return (
    <div>
        <Navbar/>
        <div className='main'>


          <div className='uhome'>
            <div className='home'>
            <h1>POULTRY FARM MANAGEMENT SYSTEM</h1>
            </div>
          </div>

          <div>
            <img  className='uimage' src='https://image.winudf.com/v2/image/Y29tLmFuZHJvbW8uZGV2MjY2Mjk5LmFwcDYxOTA4M19zY3JlZW5fMTBfdmFpMDN3YWM/screen-10.jpg?fakeurl=1&type=.jpg' alt=''/>
          </div>
        
      </div>
    
    </div>
  );
}

export default Userhome;
