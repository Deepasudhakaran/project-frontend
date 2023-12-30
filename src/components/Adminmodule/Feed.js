import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Feed = () => {

  const [fusers, setFusers] = useState( [{
    selectedvalue:"", consume:"" , receive:"", fdate:""
  }])



  useEffect(() => {
    fetchItems();
    
    
   }, []);
 
   
   const fetchItems = () =>{
     axios.get('http://localhost:8080/feed')
    .then(fusers=> setFusers(fusers.data))
    .catch(err => console.log(err))
   }
  return (
    <div>
    
    <div className='container'>
    <h3> Feed Report</h3><br/>
      <table className='table table-striped'>
        <thead>
        <tr>

            <th>Feed Name</th>
            
            <th>Consume</th>
            <th>Receive</th>
            <th>Posting date</th>
            <th>Action</th>
        </tr>
        </thead>
        <tbody>
        {fusers.map((user) => (
        <tr key={user._id}>
            <td>{user.selectedvalue}</td>
            <td>{user.consume}</td>
            <td>{user.receive}</td>
            <td>{user.fdate}</td>
            <td><Link to={'/'}  className='btn btn-sm btn-primary' >edit</Link>
                <button className='btn btn-sm btn-danger ms-2'>delete</button></td>
        </tr>
        ))}
        </tbody>
      </table>
    </div>
    </div>
  );
}

export default Feed;
