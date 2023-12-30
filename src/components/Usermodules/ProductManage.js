import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';
import './Table.css'

const ProductManage = () => {
  return (
    <div>
        <Navbar/>
         <div className='container'>
          <h3> Feed Management</h3><br/>
      <table className='table'>
        <tr>
            <th>No</th>
            <th>Product Name</th>
            <th>Product Category</th>
            <th>Quantity</th>
            <th>Posting date</th>
            <th>Action</th>
        </tr>
        <tr>
            <td>1</td>
            <td>Fresh Meat</td>
            <td>Meat</td>
            <td>10</td>
            <td>10/3/2020</td>
            <td>-</td>
        </tr>
        <tr>
            <td>2</td>  
            <td>local eggs</td>
            <td>eggs</td>
            <td>10</td>
            <td>10/3/2020</td>
            <td>-</td>
        </tr>
        <tr>
            <td>3</td>
            <td>boilers</td>
            <td>bird</td>
            <td>10</td>
            <td>10/3/2020</td>
            <td>-</td>
        </tr>
        <tr>
            <td>4</td>
            <td>young birds</td>
            <td>bird</td>
            <td>10</td>
            <td>10/3/2020</td>
            <td>-</td>
        </tr>


      </table>
    </div>
   </div>
    
  );
}

export default ProductManage;
