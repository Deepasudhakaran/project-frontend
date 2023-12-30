import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Mortality = () => {
  const [date, setDate] = useState("");
  const [mortality, setMortality] = useState("");
  const [selectedName, setSelectedName] = useState("");
  


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
 

  const handlemortalty = (e) =>{
    e.preventDefault();
       
    axios.post('http://localhost:8080/mortality', {date, selectedName, mortality })
  .then(result => {
    console.log(result);
    alert("craeted");

   
  })
  .catch(err => console.log(err));
  
};

const handleDelete = (id) => {
  axios.delete(`http://localhost:8080/mortality/${id}`)
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
          <h2>Mortality Report</h2>
          <form onSubmit={handlemortalty}>
            <label>Date :</label>
            <input type='date'
            value={date}
             style={{width:"20%"}}  
             name='date'
             onChange={(e) =>setDate(e.target.value)}/><br/>

            <label>Flock Name :</label>
            <select name="names"  value={selectedName} onChange={(e)=>setSelectedName(e.target.value)}>
    <option value=" Broiler">Broiler</option>
    <option value=" Layer"> Layer</option>
    <option value="Breeder">Breeder</option>
  </select><br/> 
            

            <label>Total Mortality :</label>
            <input type='number'
             name='mortality'
             value={mortality}
             onChange={(e) =>setMortality(e.target.value)}/><br/><br/>

           <button>Submit</button>
          </form>
          </div>

        </div>


      <div className='container'>
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
        Edit
      </Link>
      <button className='btn btn-sm btn-danger ms-2'onClick={() => handleDelete(user._id)}>Delete</button>
    </td>
  </tr>
))}
            </tbody>
            
        </table>
        </div>

    </div>
  );
}

export default Mortality;
