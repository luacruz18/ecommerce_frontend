import { CardGroup, Card } from 'react-bootstrap';
import "../App.css";

function Testimonials() {
  return (
<<<<<<< Updated upstream
    <div className='testimonials'>
      <div className='container'>
        <h3 className='text-light mb-5 pt-5'>TESTIMONIOS</h3>
        <CardGroup className="row">
          <Card className="col-sm-12 col-md-4">
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="col-sm-12 col-md-4">
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="col-sm-12 col-md-4">
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
=======
    <div style={{ width: "100%", height: "80vh", position: "relative" }}>
      <img
        src="/img/Fondotestimonios.jpg"
        alt="testimonios"
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
      <div className="testimonials-text">
        <h1>Testimonios</h1>
        <p></p>
>>>>>>> Stashed changes
      </div>
    </div>
  );
}

export default Testimonials;
