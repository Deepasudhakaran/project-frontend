import React from 'react';
import Navbar from './Navbar';
import './About.css'


const About = () => {
  return (
    <div>
        <Navbar/>
        
        <div className='abou'>
          <div className='hero'>
            <div className='hero-content '>
      <h1>Welcome to Poultry Farm</h1>
      <p>Your Trusted Farm Partner</p>
      </div>
      </div>


      <div className='about-section'>
        <div className='contain'>
      <h1>About Us</h1>
        <p>The Poultry Farm Management System, developed using the MERN stack, is a vital tool for
efficient and well-managed poultry farming operations. This system streamlines poultry farm
operations, improves data accuracy, and fosters effective communication between
administrators and users, ultimately enhancing the overall health and productivity of the

poultry farm. The MERN stack's capabilities in web development ensure a responsive, feature-
rich, and user-.friendly experience for all stakeholders involved in poultry farm management.</p><br/>
</div>
      </div>

</div>

      {/* <div className="activities-container">
        <div className="activity-grid">
          <div  className="activity-item">
          <img src='https://resources.reed.co.uk/courses/coursemedia/298282/3d663374-9109-4f3f-9a27-f54e8b066491.jpg' alt=''/>
          <h2> MEDICATION</h2>
          <p>
Poultry feed mill module in ERP software gives feed formulation with cost optimisation for expected nutritional values, lab test records enables feed quality which improves birds health. Production may be scheduled directly from silo level at farms and/or against sales orders, raw material low stock reorder automated based on demand from farms will reduces your last minute rush on supply chain management. Feed production bagging features with a fully integrated business modules like purchase, sales, inventory, and accounts enables your day-to-day operation seamless. Capture daily feed mill production data on your smartphone with easy to use mobile application, refill silo on time, track inventory stock and feed production using reports with business intelligence and graphs, improve overall operation efficiency, and grow your profit
</p>
</div>
        </div>
        </div> */}


        
{/* 
<div className='contain'>
<h2> MEDICATION</h2>
       <p>
The Medication module of PoultryCare ERP software is designed to help poultry farmers manage their bird's health efficiently. This module includes features such as medication schedule, alert and notification, and medication cost included to bird cost. Overall, this module will help farmers to keep track of medication, reduce the risk of disease outbreak and improve the bird's health. This will help farmers to increase the productivity and profitability of their operations.
 </p><br/>
  </div>

<div className='contain'>
 <h2> FEED MILL</h2>
<p>
Poultry feed mill module in ERP software gives feed formulation with cost optimisation for expected nutritional values, lab test records enables feed quality which improves birds health. Production may be scheduled directly from silo level at farms and/or against sales orders, raw material low stock reorder automated based on demand from farms will reduces your last minute rush on supply chain management. Feed production bagging features with a fully integrated business modules like purchase, sales, inventory, and accounts enables your day-to-day operation seamless. Capture daily feed mill production data on your smartphone with easy to use mobile application, refill silo on time, track inventory stock and feed production using reports with business intelligence and graphs, improve overall operation efficiency, and grow your profit
</p>
</div>
 */}


<div className="second">
        <div className="second-page">
          <div className="second-text">
            <h3>MEDICATION</h3>
            <p>
            The Medication module of PoultryCare ERP software is designed to help poultry farmers manage their bird's health efficiently. This module includes features such as medication schedule, alert and notification, and medication cost included to bird cost. Overall, this module will help farmers to keep track of medication, reduce the risk of disease outbreak and improve the bird's health. This will help farmers to increase the productivity and profitability of their operations.
            </p>
           
          </div>
          <div className="image1">
            <img
              alt=""
              src="https://resources.reed.co.uk/courses/coursemedia/298282/3d663374-9109-4f3f-9a27-f54e8b066491.jpg" />
            <img
              alt=""
              src="https://tse1.mm.bing.net/th?id=OIP.om2gYRJ_e1XxCpXvKr9TGwHaE8&pid=Api&P=0&h=180"/>
          </div>
        </div>
      </div>

      
      <div className="second">
        <div className="Third-page-reverse">
          <div className="second-text">
            <h3>FEED MILL</h3>
            <p>
            Poultry feed mill module in ERP software gives feed formulation with cost optimisation for expected nutritional values, lab test records enables feed quality which improves birds health. Production may be scheduled directly from silo level at farms and/or against sales orders, raw material low stock reorder automated based on demand from farms will reduces your last minute rush on supply chain management. Feed production bagging features with a fully integrated business modules like purchase, sales, inventory, and accounts enables your day-to-day operation seamless. Capture daily feed mill production data on your smartphone with easy to use mobile application, refill silo on time, track inventory stock and feed production using reports with business intelligence and graphs, improve overall operation efficiency, and grow your profit
            </p>
           
          </div>
          <div className="image1">
            <img
              alt=""
              src="https://www.critterridge.net/wp-content/uploads/2021/05/chicken-feed.jpg" />
            <img
              alt=""
              src="https://www.afrimash.com/wp-content/uploads/2019/05/poultry-feed-1024x656.jpg"/>
          </div>
        </div>
      </div>


     
      
      
      
    </div>
  );
}

export default About;
