import React, { useState } from 'react';
import './Editprofile.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const Editprofile = () => {
  const [farmname, setFarmname] =useState("");
  const [ownername, setOwnername] =useState("");
  const [email, setEmail] =useState("");
  const [farmid, setFarmid] =useState("");
  const [address, setAddress] =useState("");
  const [phoneno, setPhoneno] =useState("");
  const [houseno, setHouseno] =useState("");
  const [capacity, setCapacity] =useState("");
  const [broiler, setBroiler] =useState("");
  const [breeder, setBreeder] =useState("");
  const [layer, setLayer] =useState("");
  const [birdno, setBirdno] =useState("");
  const [broilerno, setBroilerno] =useState("");
  const [breederno, setBreederno] =useState("");
  const [layerno, setLayerno] =useState("");



  const handleprofile =(e) =>{

  }

  return (
    <div className='pf-card'>
      <div className=''>
      <form onSubmit={handleprofile}>
       <h2>Farm Details</h2><br/><br/>
        <i>  <legend>General Informations</legend></i> 


        <div class="row">
    <div class="col">
    <label>Farm Name :</label>
      <input type="text" class="form-control" placeholder="farm name"
       value={farmname}
       onChange={(e) =>setFarmname(e.target.value)}
       required/>

    </div>
    <div class="col">
    <label>Owner Name :</label>
      <input type="text" class="form-control" placeholder="owner name"
      value={ownername}
      onChange={(e) =>setOwnername(e.target.value)}
      required/>
    </div>
  </div>


    

<div class="row">
    <div class="col">
    <label>Farm Email :</label>
      <input type="text" class="form-control" placeholder="farm name"
       name='email'
       value={email}
       onChange={(e) =>setEmail(e.target.value)}
       required/>

    </div>
    <div class="col">
    <label>Farm Id :</label>
      <input type="text"
       class="form-control"
       placeholder="owner name"
      name='fid'
      value={farmid}
      onChange={(e) =>setFarmid(e.target.value)}
      required/>
    </div>

  </div>
        <label>Address :</label>
        <textarea class="form-control"
         rows="3"
        value={address}
        onChange={(e) =>setAddress(e.target.value)}
        placeholder='Enter the adrress'
        required></textarea>
        
        <div class="row">
        <div class="col">
        <label >Phone Number :</label>
        <input 
         type='number'
         name='number'
         class="form-control"
         placeholder="Phone Number"
         value={phoneno}
         onChange={(e) =>setPhoneno(e.target.value)}
         required/><br/><br/>
         </div>
         <div class="col"></div>
         
         </div>
       
        <i><legend>Farm Infrastructure: </legend></i><br/>

        <div class="row">
          <div class="col">
            <label>Number of Chicken Houses :</label>
             <input  type='number' 
              name='house'
              value={houseno}
              onChange={(e) =>setHouseno(e.target.value)}
              class="form-control" placeholder="No of chicken"
             required/>

    </div>
    <div class="col">
    <label>Capacity of Each House :</label>
      <input 
      type='number'
      name='capacity'
      value={capacity}
      onChange={(e) =>setCapacity(e.target.value)}
      class="form-control" placeholder="Capacity of Each House"
     required
      />
    </div>
  </div><br/>

          <label > Type of Chicken : </label>

          <div class="form-check form-check-inline" >
          <input
           type="checkbox"
           name="Broiler" 
           value={broiler}
           onChange={(e) =>setBroiler(e.target.value)}
           class="form-check-input"
          
            />
             <label class="form-check-label" for="Broiler">Broiler </label>
             </div>
             <div class="form-check form-check-inline">
         <input
          type="checkbox"  
          name="Layer"
          value={layer}
          onChange={(e) =>setLayer(e.target.value)}
          class="form-check-input"
         
            />

         <label for="  Layer" class="form-check-label"> Layer</label>
         </div>

         <div class="form-check form-check-inline">
         <input 
         type="checkbox"
           name=" Breeder"
           value={breeder}
           onChange={(e) =>setBreeder(e.target.value)}
           class="form-check-input"
            />

         <label for=" Breeder" class="form-check-label">  Breeder</label>
         </div><br/><br/>
         
         <i><legend>Stock Information :</legend> </i> <br/><br/>

         <div class="row">
        <div class="col">
        <label>Total Number Of Birds :</label>
        <input 
        type='number'
         class="form-control"
          placeholder="Number of Birds"
          name='no birds'
          value={birdno}
          onChange={(e) =>setBirdno(e.target.value)}
          required/>
         </div>
         <div class="col">
    <label>Broilers :</label>
      <input 
       type='number'
       name='broiler' 
       value={broilerno}
       onChange={(e) =>setBroilerno(e.target.value)}
       class="form-control" placeholder="Number Of Broiler"
       required/>

    </div>
         </div>

<div class="row">
  
    <div class="col">
    <label>Layers :</label>
      <input
       type='number' 
       name='layer'
       value={layerno}
       onChange={(e) =>setLayerno(e.target.value)} 
      class="form-control" placeholder="Number Of Layer"
      required/>
    </div>
    
    <div class="col">
    <label>Breeders :</label>
      <input 
       type='number'
       name='breeder'
       value={breederno}
       onChange={(e) =>setBreederno(e.target.value)}
       class="form-control" placeholder="Number Of Breeder"
      required
      />
    </div>
  </div><br/><br/>
         <Link to={'/profile'} className='sedit'>Submit</Link><br/><br/>

        
      
      </form>
      
      </div>
      
    </div>
  );
}

export default Editprofile;
