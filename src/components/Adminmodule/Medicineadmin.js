import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Medicineadmin = () => {



  const [mdusers, setMdusers] = useState( [{
    number:"", date:"", selectedmedicine:""
  }])



  useEffect(() => {
    fetchItems();
   }, []);
 
   
   const fetchItems = () =>{
     axios.get('http://localhost:8080/medicine')
    .then(mdusers=> setMdusers(mdusers.data))
    .catch(err => console.log(err))
   }

  return (
    <div>
      <div className='container'>
            <h3>Medicine Report</h3><br/>
            <table className='table table-striped'>
            <thead>
            <tr>
                <th>No</th>
                <th>Date</th>
                <th>Medicine Name</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>
            {mdusers.map((user) => (
            <tr key={user._id}>
                <td>{user.number}</td>
                <td>{user.date}</td>
                <td>{user.selectedmedicine}</td>
                <td><Link to={'/'}  className='btn btn-sm btn-primary' >edit</Link>
                <button className='btn btn-sm btn-danger ms-2' >delete</button></td>
               
            </tr>
            ))}
            </tbody>
        </table>
      </div>
    </div>
  );
}

export default Medicineadmin;
