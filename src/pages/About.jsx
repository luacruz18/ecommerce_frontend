import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaInstagram, FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";
import "../styles/About.css";

function About() {
  return (
    <div className="background-container">
      <Navbar />
      <div className="container-lg mt-4">
        <h1>Sobre este proyecto</h1>
        <div className="row">
          <hr />
          <div className="col-lg-6">
            <div className="card text-center rounded-0 p-1">
              <img
                src="\img\collage3 c6.jpg"
                className="card-img rounded-0"
                width="300px"
                alt="..."
              />
            </div>
          </div>
          <div className="col-lg-6 ps-4">
            <h2>Zona Gamer</h2>
            <p>
              En Zona Gamer nos dedicamos apasionadamente a proporcionar a
              nuestros clientes los mejores productos diseñados especialmente
              para satisfacer las necesidades de los gamers más exigentes. Desde
              equipos de última generación hasta accesorios que mejoran tu
              experiencia de juego, nuestra misión es asegurarnos de que
              encuentres exactamente lo que necesitas para llevar tu juego al
              siguiente nivel.
            </p>
          </div>
        </div>

        <div className="row">
          <h2 className="mt-5">Nuestro Equipo</h2>
          <hr />
          <div className="row row-cols-1 row-cols-lg-4 g-4 px-0 mt-0 mb-5 team-cards">
            <div className="col">
              <div className="card h-100">
                <img
                  src="\img\AndreaRodriguez.jpg"
                  className="card-img-top"
                  alt="Micaela Reyes"
                />
                <div className="card-body text-center">
                  <h5 className="card-title">Micaela Reyes</h5>
                  <h6 className="card-subtitle text-secondary my-1s">
                    Co-founder
                  </h6>
                  <p className="card-text">
                    Take a look about our team’s commitment to provide everyone
                    on our global platform with the technology that can help
                    them move ahead.
                  </p>
                </div>
                <div className="card-footer d-flex justify-content-center">
                  <ul className="list-inline">
                    <li className="list-inline-item">
                      <FaInstagram />
                    </li>
                    <li className="list-inline-item">
                      <FaTwitter />
                    </li>
                    <li className="list-inline-item">
                      <FaFacebook />
                    </li>
                    <li className="list-inline-item">
                      <FaLinkedin />
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card h-100">
                <img
                  src="\img\AlejandroNavarro.jpg"
                  className="card-img-top"
                  alt="Santiago Cozzi"
                />
                <div className="card-body text-center">
                  <h5 className="card-title">Santiago Cozzi</h5>
                  <h6 className="card-subtitle text-secondary my-1s">
                    Co-founder
                  </h6>
                  <p className="card-text">
                    Take a look about our team’s commitment to provide everyone
                    on our global platform with the technology that can help
                    them move ahead.
                  </p>
                </div>
                <div className="card-footer d-flex justify-content-center">
                  <ul className="list-inline">
                    <li className="list-inline-item">
                      <FaInstagram />
                    </li>
                    <li className="list-inline-item">
                      <FaTwitter />
                    </li>
                    <li className="list-inline-item">
                      <FaFacebook />
                    </li>
                    <li className="list-inline-item">
                      <FaLinkedin />
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card h-100">
                <img
                  src="\img\AndreaRodriguez.jpg"
                  className="card-img-top"
                  alt="Luana Cruz"
                />
                <div className="card-body text-center">
                  <h5 className="card-title">Luana Cruz</h5>
                  <h6 className="card-subtitle text-secondary my-1s">
                    Co-founder
                  </h6>
                  <p className="card-text">
                    Take a look about our team’s commitment to provide everyone
                    on our global platform with the technology that can help
                    them move ahead.
                  </p>
                </div>
                <div className="card-footer d-flex justify-content-center">
                  <ul className="list-inline">
                    <li className="list-inline-item">
                      <FaInstagram />
                    </li>
                    <li className="list-inline-item">
                      <FaTwitter />
                    </li>
                    <li className="list-inline-item">
                      <FaFacebook />
                    </li>
                    <li className="list-inline-item">
                      <FaLinkedin />
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card h-100">
                <img
                  src="\img\AndreaRodriguez.jpg"
                  className="card-img-top"
                  alt="Sofia Salaberry"
                />
                <div className="card-body text-center">
                  <h5 className="card-title">Sofia Salaberry</h5>
                  <h6 className="card-subtitle text-secondary my-1s">
                    Co-founder
                  </h6>
                  <p className="card-text">
                    Take a look about our team’s commitment to provide everyone
                    on our global platform with the technology that can help
                    them move ahead.
                  </p>
                </div>
                <div className="card-footer d-flex justify-content-center">
                  <ul className="list-inline">
                    <li className="list-inline-item">
                      <FaInstagram />
                    </li>
                    <li className="list-inline-item">
                      <FaTwitter />
                    </li>
                    <li className="list-inline-item">
                      <FaFacebook />
                    </li>
                    <li className="list-inline-item">
                      <FaLinkedin />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default About;
