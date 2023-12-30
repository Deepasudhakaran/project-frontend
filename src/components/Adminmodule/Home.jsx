import React from 'react';
import { useNavigate } from "react-router-dom";
import './Home.css'
import { IoArrowBackCircleOutline } from "react-icons/io5";



const Home = () => {
    const navigate = useNavigate();
  return (
    <div>
      <div className='topnav' >
      <p><b>ADMIN HOME</b></p>
      <span className='list-items'>
      <a href="/">  <IoArrowBackCircleOutline/></a> 
            </span>
      </div>

      <div className='demo'> 
    <button  onClick={()=>navigate('/register')}>Register</button>
    <button  onClick={()=>navigate('/farmusers')} >Farm Details</button>
    </div>
   

    

    <div className='demo2'>
    <button  onClick={()=>navigate('/Amortality')} >Mortality</button>
    <button   onClick={()=>navigate('/amedicine')}>Medicine Management</button>
    <button  onClick={()=>navigate('/')} >Help And Support</button>
    </div>
    <div className='demo'>
    <button  onClick={()=>navigate('/Aegg')} >Egg management</button>
    <button  onClick={()=>navigate('/Afeed')} >Feed Management</button>
    </div>
    </div>
  );
}

export default Home;
