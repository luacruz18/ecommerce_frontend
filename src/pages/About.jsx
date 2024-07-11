import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  FaInstagram,
  FaTwitter,
  FaFacebook,
  FaLinkedin,
  FaNodeJs,
  FaReact,
  FaGithub,
  FaCss3Alt,
  FaHtml5,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
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
            <div className="card text-center p-1">
              <img
                src="\img\TeamWork.jpg"
                className="card-img"
                width="300px"
                alt="..."
              />
            </div>
          </div>
          <div className="col-lg-6 ps-4">
            <p className="introduction-text">
              ¡Bienvenidos a ZonaGamer!, un innovador proyecto de ecommerce
              gestado por estudiantes de Anima, donde la creatividad y la pasión
              se unen para ofrecerte una experiencia de compra única. En nuestra
              plataforma, buscamos no solo satisfacer tus necesidades, sino
              también inspirarte con productos cuidadosamente seleccionados que
              reflejan nuestra dedicación y conocimiento. Nuestro equipo está
              comprometido con la excelencia y se esfuerza por superar tus
              expectativas en cada pedido. Explora nuestro catálogo y únete a
              nosotros en este emocionante viaje hacia el comercio digital del
              futuro.
            </p>
          </div>
        </div>

        <div className="iconos-container">
          <FaNodeJs className="icon" />
          <FaReact className="icon" />
          <FaGithub className="icon" />
          <IoLogoJavascript className="icon" /> <FaCss3Alt className="icon" />
          <FaHtml5 className="icon" />
        </div>

        <div className="row">
          <h2 className="mt-5">Nuestro Equipo</h2>
          <hr />
          <div className="row row-cols-1 row-cols-lg-4 g-4 px-0 mt-0 mb-5 team-cards">
            <div className="col">
              <div className="card h-100">
                <img
                  src="\img\At work.jpg"
                  className="card-img-top"
                  alt="Micaela Reyes"
                />
                <div className="card-body text-center">
                  <h5 className="card-title">Micaela Reyes</h5>
                  <h6 className="card-subtitle text-secondary my-1s">
                    Co-founder
                  </h6>
                  <p className="card-text">
                    Observa nuestro compromiso como equipo de proporcionar a
                    cada persona en nuestra plataforma global la tecnología que
                    puede ayudarles a avanzar.
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
                  src="\img\8804887.jpg"
                  className="card-img-top"
                  alt="Santiago Cozzi"
                />
                <div className="card-body text-center">
                  <h5 className="card-title">Santiago Cozzi</h5>
                  <h6 className="card-subtitle text-secondary my-1s">
                    Co-founder
                  </h6>
                  <p className="card-text">
                    Nuestro equipo se dedica a asegurar que todos en nuestra
                    plataforma global cuenten con la tecnología necesaria para
                    progresar.
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
                  src="\img\8634835.jpg"
                  className="card-img-top"
                  alt="Luana Cruz"
                />
                <div className="card-body text-center">
                  <h5 className="card-title">Luana Cruz</h5>
                  <h6 className="card-subtitle text-secondary my-1s">
                    Co-founder
                  </h6>
                  <p className="card-text">
                    Nos comprometemos a ofrecer a todos los usuarios de nuestra
                    plataforma global las herramientas tecnológicas que les
                    impulsen hacia adelante.
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
                  src="img\2894058.jpg"
                  className="card-img-top"
                  alt="Sofia Salaberry"
                />
                <div className="card-body text-center">
                  <h5 className="card-title">Sofia Salaberry</h5>
                  <h6 className="card-subtitle text-secondary my-1s">
                    Co-founder
                  </h6>
                  <p className="card-text">
                    En nuestro equipo nos esforzamos por garantizar que todos en
                    nuestra plataforma global tengan acceso a la tecnología que
                    les permita avanzar.
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
