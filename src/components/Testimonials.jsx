import React from "react";
import { Card, CardGroup } from "react-bootstrap";
import "../App.css";

function Testimonials() {
  return (
    <div className="testimonials-container">
      <img
        className="background-img"
        src={import.meta.env.VITE_IMG_URL + "fondotestimonios.jpg"}
        alt="Ofertas Especiales"
      />
      <h3 className="text-center mb-5 pt-5 black-text">TESTIMONIOS</h3>
      <div className="container">
        <CardGroup className="row">
          <div className="col-sm-12 col-md-4 mb-4">
            <Card className="cardstestimonials h-100">
              <Card.Img
                className="cards-img"
                src={import.meta.env.VITE_IMG_URL + "LucasFernández.jpg"}
                alt="Lucas Fernández"
              />
              <Card.Body>
                <Card.Title className="text-testi black-text">
                  Lucas Fernández
                </Card.Title>
                <Card.Text className="text-testi black-text">
                  La Alienware Aurora R13 es una excelente opción para los
                  gamers que buscan lo mejor en términos de rendimiento y
                  diseño, con características avanzadas que aseguran una
                  experiencia de juego inmersiva y fluida.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div className="col-sm-12 col-md-4 mb-4">
            <Card className="cardstestimonials h-100">
              <Card.Img
                className="cards-img"
                src={import.meta.env.VITE_IMG_URL + "IsabellaMartínez.jpg"}
                alt="Isabella Martínez"
              />
              <Card.Body>
                <Card.Title className="text-testi black-text">
                  Isabella Martínez
                </Card.Title>
                <Card.Text className="text-testi black-text">
                  Mi experiencia con la Alienware m15 R7 ha sido fantástica. Su
                  rendimiento y capacidad de respuesta son impresionantes,
                  permitiéndome jugar mis títulos favoritos sin problemas.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div className="col-sm-12 col-md-4 mb-4">
            <Card className="cardstestimonials h-100">
              <Card.Img
                className="cards-img"
                src={import.meta.env.VITE_IMG_URL + "SofiaGomez.jpg"}
                alt="Sofía Gómez"
              />
              <Card.Body>
                <Card.Title className="text-testi black-text">
                  Sofía Gómez
                </Card.Title>
                <Card.Text className="text-testi black-text">
                  La Alienware X17 es una máquina impresionante. Su diseño delgado
                  y elegante no compromete su potencia, brindando un desempeño
                  sobresaliente en juegos y aplicaciones pesadas.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </CardGroup>
      </div>
    </div>
  );
}

export default Testimonials;
