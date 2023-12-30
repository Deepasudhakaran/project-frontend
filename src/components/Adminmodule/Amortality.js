import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Amortality = () => {


    const  [musers,setMusers] = useState([{
        date:"", selectedName:"", mortality:""
      }]);
    
    
    
    
      useEffect(() => {
        fetchItems();
        
        
       }, []);
     
       
       const fetchItems = () =>{
         axios.get('http://localhost:8080/mortality')
        .then(musers=> setMusers(musers.data))
        .catch(err => console.log(err))
       }
  return (
   
      <div className='d-flex flex-column justify-content-center align-items-center bg-light vh-100'>
      <h3>Mortality Report</h3><br/>
      <div className='w-75 rounded bg-white border shadow p-4'>
      <table className='table table-striped'>
      <thead>
            <tr>
                
                <th>Date</th>
                <th>Flock Name</th>
                <th>Total Mortality</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>
             {musers.map((user) => (
            <tr key={user._id}>
           <td>{user.date}</td>
           <td>{user.selectedName}</td>
           <td>{user.mortality}</td>
           <td>
            <Link to={'/'} className='btn btn-sm btn-primary'>
           edit
          </Link>
      <button className='btn btn-sm btn-danger ms-2'>delete</button>
    </td>
  </tr>
))}
            
            </tbody>
            
        </table>
        </div>
        </div>
 
  );
}

export default Amortality;
