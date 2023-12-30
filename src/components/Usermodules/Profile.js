import React from 'react';
import './Profile.css';
import { Link } from 'react-router-dom';


const Profile = () => {
  return (
    <div>
      



      {/* <div  className='c'>
        <form>
        <h3>1. General Information:</h3>

        <p>Farm Name : farm1</p>
        <p>Owner Name : abc</p>
        <p>Email id : farm1@gmail.com</p>
        <p>Farm Id : Lincence Number </p>
        <p>Phone Number : 999999999</p>
        <p>Address : location</p>

        <h3>Farm Infrastructure:</h3>

        <p>Number of Chicken Houses :  4</p>
        <p>Capacity of Each House : 100</p>
        <p>Type of Chicken  : 
          Broiler
          Layer
          Breeder
        </p>

        <h3>Stock Information :</h3>

        <h6>Total Number of Birds:300</h6>
        <p>Broilers: 150</p>
        <p>Layers: 70</p>
        <p>Breeders:80</p> 
        
        <h3>Age Groups:</h3>
        <p>Chicks:</p>
        <p>Layers:</p>
        <p>Layers/Breeders:</p>
        </form>

      </div> */}


{/* <div class="row">
<h3>1. General Information:</h3>
               <div class="bio-row">
                  <p><span>Farm Name: </span> farm1</p>
                  </div>
              
              <div class="bio-row">
                  <p><span>Owner Name: </span> abc</p>
              </div><br/>
              <div class="bio-row">
                  <p><span>Email id : </span> farm1@gmail.com</p>
              </div><br/>
              <div class="bio-row">
                  <p><span>Farm Id : </span> 34256783</p>
              </div>
              <div class="bio-row">
                  <p><span>Phone Number: </span> 98356723948</p>
              </div><br/>
              <div class="bio-row">
                  <p><span>Address : </span> abcd,  malappuram</p>
              </div>
              <h3>Farm Infrastructure:</h3><br/>
              <div class="bio-row">
                  <p><span>Number of Chicken Houses: </span> 4</p>
              </div><br/>
              <div class="bio-row">
                  <p><span>Capacity of Each House :</span>  100</p>
              </div>
              <div class="bio-row">
                  <p><span>Type of Chicken  : </span>  Broiler, Layer, Breeder</p>
              </div>
              <h3>Stock Information :</h3>

              <div class="bio-row">
                  <p><span>Total Number of Birds: </span> 300</p>
              </div>
              <div class="bio-row">
                  <p><span>Broilers: </span> 150</p>
              </div>
              <div class="bio-row">
                  <p><span> Layers:</span>70 </p>
              </div>
              <div class="bio-row">
                  <p><span>Breeders: </span>80 </p>
              </div>
             
          </div> */}
        
                                 
<div className='pf-card'>
 <div class="row about-list">
    <h2>FARM DETAILS</h2>
                                <div class="col-md-6">
                                <h4> General Information</h4><br/>
                                    <div class="media">
                                        <label>Farm Name</label>
                                        <p>farm1</p>
                                    </div>
 
                                    <div class="media">
                                        <label>Owner Name</label>
                                        <p>gdc</p>
                                    </div>
                                    
                                    <div class="media">
                                        <label>Email id </label>
                                        <p>abc@gmail.com</p>
                                    </div>
                                    <div class="media">
                                        <label>Farm id </label>
                                        <p>324354y54</p>
                                    </div>

                                    <div class="media">
                                        <label>Phone</label>
                                        <p>820-885-3321</p>
                                    </div>

                                    <div class="media">
                                        <label>Address</label>
                                        <p>California, USA</p>
                                    </div><br/>
                                
                            
                                
                                <h4>Farm Infrastructure</h4><br/>
                                
                                    <div class="media">
                                        <label  >Number of Chicken Houses</label>
                                        <p>4</p>
                                    </div>
                                    
                                    <div class="media">
                                        <label  >Capacity of Each House</label>
                                        <p>100</p>
                                    </div>
                                    <div class="media">
                                        <label  >Type of Chicken </label>
                                        <p>Broiler, Layer, Breeder</p>
                                    </div><br/>
                                    

                                    
                                    <h4>Stock Information </h4><br/>

                                    <div class="media">
                                        <label>Total Number of Birds</label>
                                        <p>300</p>
                                    </div>
                                    <div class="media">
                                        <label>Broiler</label>
                                        <p>100</p>
                                    </div>
                                    <div class="media">
                                        <label>Layer</label>
                                        <p>100</p>
                                    </div>
                                    <div class="media">
                                        <label>Breeder</label>
                                        <p>100</p>
                                    </div>
                                    </div>

                            </div><br/><br/>
                            <Link to={'/edit'} className='ebut'>  Edit profile </Link><br/><br/>
                            </div>
                        
                                               
                        
    </div>
  );
}

export default Profile;





// style={{ width: "190px"}}