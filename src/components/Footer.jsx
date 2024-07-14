import React from "react";
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../styles/Footer.css";

function Footer() {
  const handleLinkClick = (message) => {
    toast.error(message);
  };

  const handleErrorClick = (errorMessage) => {
    toast.error(errorMessage);
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-row">
            <div className="footer-col">
              <ul className="footer-nav">
                <li>
                  <Link to="/sobrenosotros" className="footer-link">Sobre nuestro proyecto</Link>
                </li>
                <li>
                  <Link to="/" className="footer-link">Home</Link>
                </li>
              </ul>
            </div>
          </div>
          <hr className="footer-hr" />
          <div className="footer-row">
            <div className="footer-col align-bottom">
              <ul className="footer-icons">
                <li>
                  <i className="bi bi-facebook" onClick={() => handleErrorClick('Error: ¡El sitio está en construcción!')}></i>
                </li>
                <li>
                  <i className="bi bi-twitter" onClick={() => handleErrorClick('Error: ¡El sitio está en construcción!')}></i>
                </li>
                <li>
                  <i className="bi bi-instagram" onClick={() => handleErrorClick('Error: ¡El sitio está en construcción!')}></i>
                </li>
                <li>
                  <i className="bi bi-linkedin" onClick={() => handleLinkClick('¡El sitio está en construcción!')}></i>
                </li>
              </ul>
            </div>
            <div className="footer-col align-bottom">
              <ul className="footer-links">
                <li>
                  <Link to="#" className="footer-link" onClick={() => handleLinkClick('¡El sitio está en construcción!')}>Términos de uso</Link>
                </li>
                <li>
                  <Link to="#" className="footer-link" onClick={() => handleLinkClick('¡El sitio está en construcción!')}>Política de privacidad</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
