import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Farmusers.css'

const Farmusers = () => {
    
  const  [rusers,setRusers] = useState([{
    username:"", email:"" , 
  }]);




  useEffect(() => {
    fetchItems();
    
    
   }, []);
 
   
   const fetchItems = () =>{
     axios.get('http://localhost:8080/register')
    .then(rusers=> setRusers(rusers.data))
    .catch(err => console.log(err))
   }

  return (
    <div>
      <div>
      {rusers.map((user) => (
  <tr key={user._id}>
      <div className='form1'>
      <img src="https://cdn3.iconfinder.com/data/icons/web-design-and-development-2-6/512/87-1024.png" alt="Avatar" />
      
    <td>{user.username}</td><br/>
    <td>{user.email }</td>
    </div>
    </tr>
    ))}
     
      </div>
    </div>
  );
}

export default Farmusers;
