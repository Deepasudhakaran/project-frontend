import React from 'react';
import './Footer.css'

const Footer = () => {
  return (
    <div>
     <div className="footer">
        <div className="top">
          <div>
            <h1>© 2023 Poultry Care ~</h1>
          </div>
          <div>
            <a href="/">
              <i className="fab fa-facebook-squarei"></i>
            </a>
            <a href="/">
              <i className="fab fa-instagram-square"></i>
            </a>
            <a href="/">
              <i className="fab fa-facebook-square"></i>
            </a>
            <a href="/">
              <i className="fab fa-twitter-square"></i>
            </a>
            <a href="/">
              <i className="fab fa-behance-square"></i>
            </a>
          </div>
        </div>
        <div className="bottom">
          <div>
            <h4>Project</h4>
            <a href="/">Changelog</a>
            <a href="/">Status</a>
            <a href="/">License</a>
            <a href="/">All Versions</a>
          </div>
          <div>
            <h4>Community</h4>
            <a href="/">Changelog</a>
            <a href="/">Status</a>
            <a href="/">License</a>
            <a href="/">All Versions</a>
          </div>
          <div>
            <h4>Help</h4>
            <a href="/">Support</a>
            <a href="/">Trouble shooting</a>
            <a href="/">Contact Us</a>
          </div>
          <div>
            <h4>Others</h4>
            <a href="/">Terms of services</a>
            <a href="/">privacy policy</a>
            <a href="/">License</a>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Footer;
