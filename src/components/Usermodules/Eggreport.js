import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const Eggreport = () => {

  const [edate, setEdate] = useState("");
  const [enumber, setEnumber] = useState("");
  const [broken, setBroken] = useState("");
  const [selectedName, setSelectedName] = useState("");





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



   const handleEggreport = (e) =>{
    e.preventDefault();
    axios.post('http://localhost:8080/egg', { edate, enumber,broken, selectedName})
  .then(result => {
    console.log(result);
    alert('created')
   
  })
  .catch(err => console.log(err));

}


const handleDelete = (id) => {
  axios.delete(`http://localhost:8080/egg/${id}`)
    .then(() => {
      alert('deleted')
      fetchItems();
    })
    .catch((error) => {
      console.error('Error deleting item:', error);
    });
};






  return (
    <div>


     <div>
        <Navbar/>

        <div className='container'>
          <div className='farm'>
          <h2>Egg Report</h2>
          <form onSubmit={handleEggreport}>
           
            <label>Date :</label>
            <input type='date'
             style={{width:"20%"}} 
              name='date'
              value={edate}
              onChange={(e) =>setEdate(e.target.value)}/><br/>

            <label>Flock Name :</label>
            <select name="names"  value={selectedName} onChange={(e)=>setSelectedName(e.target.value)}>
    <option value="Chicken">Chicken</option>
    <option value="Goose">Goose</option>
    <option value="Turkey">Turkey</option>
  </select><br/> 


  {/* <label>Flock Type :</label>
            <select name="types"  value={selectedName} onChange={(e)=>setSelectedName(e.target.value)}>
    <option value="Dual-purpuse">Dual-purpuse</option>
    <option value="Exhibition">Exhibition</option>
    <option value="Egg Type">Egg Type</option>
  </select><br/>  */}

            <label>Total Eggs :</label>
            <input type='number' 
            name='total'
            value={enumber}
            onChange={(e) =>setEnumber(e.target.value)} />

            <label>Broken :</label>
            <input type='number'
             name='broken'
             value={broken}
             onChange={(e) =>setBroken(e.target.value)}
             /><br/><br/>
             
           <button>Submit</button>
          </form>
          </div>

        </div>

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
            <tr key={user._id}>
               
                <td>{user.edate}</td>
                <td>{user.enumber}</td>
                <td>{user.broken}</td>
                <td>{user.selectedName}</td>
                <td>
                <Link to={'/'}  className='btn btn-sm btn-primary' >Edit</Link>
                <button className='btn btn-sm btn-danger ms-2' onClick={() => handleDelete(user._id)}>Delete</button>
                </td>
            </tr>
            ))}

            </tbody>
        </table>
      </div>
      </div>


    </div>
  );
}

export default Eggreport;
