import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import axios from 'axios';


const Feedmanage = () => {
  // const [feed,setFeed] =useState("")
  // const [qty,setQty] =useState("")
  const [selectedvalue,setSelectedvalue] = useState("");
  const [consume,setConsume] =useState("");
  const [receive,setReceive] =useState("");
  const [fdate,setFdate] =useState("");

  const [fusers, setFusers] = useState( [{
    selectedvalue:"", consume:"" , receive:"", fdate:""
  }])




  useEffect(() => {
    fetchItems();
    
    
   }, []);
 
   
   const fetchItems = () =>{
    const token = localStorage.getItem('token');

     axios.get('http://localhost:8080/feed', { headers: { Authorization: `Bearer ${token}` } })
      .then(fusers => setFusers(fusers.data))
      .catch(err => console.log(err));
  };
 

  const handlefeed = (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');

    axios.post('http://localhost:8080/feed', { selectedvalue, consume, receive, fdate }, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(result => {
        console.log(result);
        alert('created');
        fetchItems(); 
      })
      .catch(err => console.log(err));
  };


  const handleDelete = (id) => {
    const token = localStorage.getItem('token');

    axios.delete(`http://localhost:8080/feed/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(() => {
        alert('deleted');
        fetchItems(); 
      })
      .catch((error) => {
        console.error('Error deleting item:', error);
      });
  };

  return (
    <div>
      <Navbar/>
         <div className='container'>

         <div className='farm'>
          <h2>Feed Report</h2>
          <form onSubmit={handlefeed}>
            <label>Feed Name :</label>
           
               <select name="cars"  value={selectedvalue} onChange={(e)=>setSelectedvalue(e.target.value)}>
    <option value="wheat">wheat</option>
    <option value="Soybean meal">Soybean meal</option>
    <option value="Sorghum">Sorghum</option>
    <option value="Fish meal">Fish meal</option>
  </select><br/> 

          

            <label>consume :</label>
            <input type='number'
             name='consuming'
             value={consume}
             onChange={(e) =>setConsume(e.target.value)}/>

           <label>received :</label>
            <input type='number'
             name='receive'
             value={receive}
             onChange={(e) =>setReceive(e.target.value)}/><br/>

            <label>Date</label>
            <input type='date'
             name='date'
             value={fdate}
            onChange={(e) =>setFdate(e.target.value)}/><br/><br/>
           <button>Submit</button>
          </form>
          </div>
          </div>

        <div className='container'>
          <h3> Feed Report</h3><br/>
      <table  className='table table-striped'>
        <thead>
        <tr>
           
            <th>Feed Name</th>
            
            <th>Consume</th>
            <th>Receive</th>
            <th>Posting date</th>
            <th>Action</th>
        </tr>
        </thead>
        <tbody >
        {fusers.map((user) => (
        <tr key={user._id}>
            <td>{user.selectedvalue}</td>
            <td>{user.consume}</td>
            <td>{user.receive}</td>
            <td>{user.fdate}</td>
            <td><Link to={'/'}  className='btn btn-sm btn-primary' >Edit</Link>
                <button className='btn btn-sm btn-danger ms-2' onClick={() => handleDelete(user._id)}>Delete</button></td>
        </tr>
        ))}
        </tbody>
      </table>
    </div>
    </div>
  );
}

export default Feedmanage;
