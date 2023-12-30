import React, { useEffect, useState } from 'react';
import './Atable.css';
import { Link } from 'react-router-dom';
import axios from 'axios';




const Egg = () => {
  const  [eusers,setEusers] = useState([{
    edate:"" , enumber:"" ,broken:"" , selectedName:"",
  }]);



  useEffect(() => {
    fetchItems();
    
    
   }, []);
 
   
   const fetchItems = () =>{
     axios.get('http://localhost:8080/egg')
    .then(eusers=> setEusers(eusers.data))
    .catch(err => console.log(err))
   }

  return (
    <div>
         <div className='container'>
            <h3>Egg Report</h3><br/>
            <table className='table table-striped'>
          <thead>
            <tr>
              
                <th>Date</th>
                <th>Flock Name</th>
               
                <th>Total Eggs</th>
                <th>Broken</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>
            {eusers.map((user) => (
            <tr key={user._id} >
               
               <td>{user.edate}</td>
                <td>{user.enumber}</td>
                <td>{user.broken}</td>
                <td>{user.selectedName}</td>
                <td>
                <Link to={'/'}  className='btn btn-sm btn-primary' >edit</Link>
                <button className='btn btn-sm btn-danger ms-2' >delete</button>
                </td>
            </tr>
            
            ))}
            
            </tbody>
        </table>
      </div>
      
    </div>
  );
}

export default Egg;
