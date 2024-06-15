import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import "../App.css";

function Testimonials() {
  return (
    <div className="testimonials">
      <img
        className="background-img"
        src={import.meta.env.VITE_IMG_URL + "fondotestimonios.jpg"}
        alt="Background"
      />
      <div className="container">
        <h3 className="text-center mb-5 pt-5">TESTIMONIOS</h3>
        <CardGroup>
          <div className="row">
            <div className="col-sm-12 col-md-4 mb-4">
              <Card className="cardstestimonials">
                <Card.Img
                  className="cards-img"
                  src={import.meta.env.VITE_IMG_URL + "LucasFernández.jpg"}
                  alt="Lucas Fernández"
                />
                <Card.Body>
                  <Card.Title>Lucas Fernández</Card.Title>
                  <Card.Text>
                    La Alienware Aurora R13 es una excelente opción para los
                    gamers que buscan lo mejor en términos de rendimiento y
                    diseño, con características avanzadas que aseguran una
                    experiencia de juego inmersiva y fluida.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-sm-12 col-md-4 mb-4">
              <Card className="cardstestimonials">
                <Card.Img
                  className="cards-img"
                  src={import.meta.env.VITE_IMG_URL + "AndreaRodriguez.jpg"}
                  alt="Andrea Rodríguez"
                />
                <Card.Body>
                  <Card.Title>Andrea Rodríguez</Card.Title>
                  <Card.Text>
                    Compré este mouse óptico retráctil para mis viajes, y puedo
                    decir que es una gran adquisición. Es súper ligero y
                    compacto, lo cual es perfecto para llevar en el bolso de mi
                    portátil. ¡El cable retráctil es un salvavidas!
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-sm-12 col-md-4 mb-4">
              <Card className="cardstestimonials">
                <Card.Img
                  className="cards-img"
                  src={import.meta.env.VITE_IMG_URL + "AlejandroNavarro.jpg"}
                  alt="Alejandro Navarro"
                />
                <Card.Body>
                  <Card.Title>Alejandro Navarro</Card.Title>
                  <Card.Text>
                    Quiero compartir mi experiencia con la silla gamer ROM. ¡Es
                    simplemente increíble! Desde que la tengo, mis sesiones de
                    juego han dado un salto de comodidad y rendimiento. El
                    diseño ergonómico realmente hace maravillas por mi espalda.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </CardGroup>
      </div>
    </div>
  );
}

export default Testimonials;
