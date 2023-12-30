import React, { useEffect, useState } from 'react';
import './Table.css'
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Medicinereport = () => {
    const [number, setNumber] = useState("");
    const [date, setDate] = useState("");
    const [selectedmedicine, setSelectedMedicine] = useState("");

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


    const handleMedicinereport = (e) =>{
        e.preventDefault();
       
        axios.post('http://localhost:8080/medicine', { number, date, selectedmedicine})
      .then(result => {
        console.log(result);
        alert("created");
      })
      .catch(err => console.log(err));
    }
    const handleDelete = (id) => {
      axios.delete(`http://localhost:8080/medicine/${id}`)
        .then(() => {
        alert("deleted")
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
          <h2>Medicine Report</h2>
          <form onSubmit={handleMedicinereport}>
          <label>Number :</label>
            <input type='number'
             name='broken'
             value={number}
             onChange={(e) =>setNumber(e.target.value)}
             /><br/>
           
            <label>Date :</label>
            <input type='date'
             style={{width:"20%"}} 
              name='date'
              value={date}
              onChange={(e) =>setDate(e.target.value)}/><br/>

            <label>Medicine Name :</label>
            <select name="names"  value={selectedmedicine} onChange={(e)=>setSelectedMedicine(e.target.value)}>
    <option value="Antibiotic A">Antibiotic A</option>
    <option value="Wormer B">Wormer B</option>
    <option value="Coccidiostat C">Coccidiostat C</option>
    <option value="Growth Promoter D">Growth Promoter D</option>
    <option value="Iodine Solution">Iodine Solution</option>
  </select><br/> 


  {/* <label>Flock Type :</label>
            <select name="types"  value={selectedName} onChange={(e)=>setSelectedName(e.target.value)}>
    <option value="Dual-purpuse">Dual-purpuse</option>
    <option value="Exhibition">Exhibition</option>
    <option value="Egg Type">Egg Type</option>
  </select><br/>  */}

           
             
           <button>Submit</button>
          </form>
          </div>

        </div>




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

export default Medicinereport;
