import React, { createContext, useEffect, useState } from 'react';
import { Route,Routes } from 'react-router-dom';
import Login from './Login.js';
import Register from './Register.js';
import Userhome from './Usermodules/Userhome.js';
import Navbar from './Usermodules/Navbar.js';
import Contact from './Usermodules/Contact.js';
import About from './Usermodules/About.js';
import Footer from './Usermodules/Footer.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from './Usermodules/Profile.js';



import Home from './Adminmodule/Home.jsx';
import Anavbar from './Adminmodule/Anavbar.js';
import ProductManage from './Usermodules/ProductManage.js';
import Sidebar from './Usermodules/Sidebar.js';
import Eggreport from './Usermodules/Eggreport.js';
import Feedmanage from './Usermodules/Feedmanage.js';
import Medicinereport from './Usermodules/Medicinereport.js';
import Mortality from './Usermodules/Mortality.js';
import Feed from './Adminmodule/Feed.js';
import Egg from './Adminmodule/Egg.js';
import Amortality from './Adminmodule/Amortality.js';
import Medicineadmin from './Adminmodule/Medicineadmin.js';
import Editprofile from './Usermodules/Editprofile.js';
import Farmusers from './Adminmodule/Farmusers.js';
import P2 from './Usermodules/P2.js';
import axios from 'axios';



export const userContext = createContext()




const Mainrouter = () => {
const [user,setUser] = useState("")


  axios.defaults.withCredentials =true;
  useEffect(() => {
    axios.get('http://localhost:8080/')
    .then(user =>{
      setUser(user.data)
    }
       )
    .catch(err => console.log(err))
  }, [])


  return (
    <userContext.Provider value={user}>
    <div>
      <Routes>
      <Route path='/' element={<Login />}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/userhome' element={<Userhome/>}/>
      <Route path='/navbar' element={<Navbar/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/footer' element={<Footer/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/sidebar' element={<Sidebar/>}/>
      <Route path='/product' element={<ProductManage/>}/>
      <Route path='/egg' element={<Eggreport/>}/>
      <Route path='/feed' element={<Feedmanage/>}/>
      <Route path='/medicine' element={<Medicinereport/>}/>
      <Route path='/mortality' element={<Mortality/>}/>
      <Route path='/edit' element={<Editprofile/>}/>



      <Route path='/home' element={<Home/>}/>
      <Route path='/nav' element={<Anavbar/>}/>
      <Route path='/Afeed' element={<Feed/>}/>
      <Route path='/Aegg' element={<Egg/>}/>
      <Route path='/amortality' element={<Amortality/>}/>
      <Route path='/amedicine' element={<Medicineadmin/>}/>
      <Route path='/farmusers' element={<Farmusers/>}/>
      <Route path='/p2' element={<P2/>}/>
      
      
      </Routes> 
    </div>
    </userContext.Provider>
  );
}

export default Mainrouter;
