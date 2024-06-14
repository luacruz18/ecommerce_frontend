import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';


function Testimonials() {
  return (
    <div className='testimonials'>
      <img 
        className="background-img" 
        src={import.meta.env.VITE_IMG_URL + "fondotestimonios.jpg"} 
        alt="Background" 
      />
      <div className='container'>
        <h3 className='text-light mb-5 pt-5'>TESTIMONIOS</h3>
        <CardGroup className="row">
          <div className="col-sm-12 col-md-4 mb-4">
            <Card>
              <Card.Img variant="top" src="public/img/LucasFernández.jpg" />
              <Card.Body>
                <Card.Title> Lucas Fernández</Card.Title>
                <Card.Text>
                  <p>La Alienware Aurora R13 es una excelente opción para los gamers que buscan lo mejor en términos de rendimiento y diseño, con características avanzadas que aseguran una experiencia de juego inmersiva y fluida.</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-sm-12 col-md-4 mb-4">
            <Card>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Sofía López</Card.Title>
                <Card.Text>
                 <p>Compré este mouse óptico retráctil para mis viajes, y puedo decir que es una gran adquisición. Es súper ligero y compacto, lo cual es perfecto para llevar en el bolso de mi portátil. </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-sm-12 col-md-4 mb-4">
            <Card>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Alejandro Navarro.</Card.Title>
                <Card.Text>
                <p>¡Hola a todos! Quiero compartir mi experiencia con la silla gamer ROM. ¡Es simplemente increíble! Desde que la tengo, mis sesiones de juego han dado un salto de comodidad y rendimiento.</p>
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
