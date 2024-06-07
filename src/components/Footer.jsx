import React from 'react';
import '../Footer.css';


function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <ul className="nav-footer">
              <li><a href="#">About</a></li>
              <li><a href="#">Home</a></li>
              <li><a href="#">Newsroom</a></li>
              <li><a href="#">Accessibility</a></li>
              <li><a href="#">Help</a></li>
            </ul>
          </div>
          <div className="col-md-6">
            <ul className="nav-footer">
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Use</a></li>
            </ul>
            
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <hr className="my-4" />
           
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;