import React from 'react';
import './Navbar.css'
import Sidebar from './Sidebar';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';





const Navbar = () => {
const navigate = useNavigate();
  const handleLogout = ()=>{
    axios.get('http://localhost:8080/logout')
    .then(res =>{
      if(res.data === "Success")
      navigate('/')

    }).catch(err => console.log(err))

  }
  // state = { clicked :false};
  // handleClick = () =>{
  //   this.setstate({ clicked : !this.state.clicked})
  // }
  return (
    <div>
      <div className='topnav1'>
        <div className='logo'>
        <h2 > <img  style={{height:"60px" }} src="https://tse3.mm.bing.net/th?id=OIP.YNyakKBi_TJBM7awYhET_AHaHh&pid=Api&P=0&h=180" alt='' />Poultry Care </h2>
         
        </div>

{/* 
        <div className='menu-icons' onClick={this.handleClick}>
        <i className={this.state.clicked ? "fa-solid fa-bars" : "fa-solid fa-xmark" }></i>
        
          </div> */}


      <div className='cd'>
        <ul className='nav-menu'>
          <li> <Link className="nav-link" to='/userhome'> HOME</Link></li>
          <li><Link className="nav-link" to='/About'> ABOUT</Link></li>
          <li> <Link className="nav-link" to='/contact'> CONTACT</Link></li>
          <li><button className="nav-link" onClick={handleLogout}>LOG-OUT</button></li>
            </ul>
            </div>
            <Sidebar/>
      </div>
    </div>
  );
}

export default Navbar;
