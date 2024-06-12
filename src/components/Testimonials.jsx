import { CardGroup, Card } from 'react-bootstrap';
import "../App.css";

function Testimonials() {
  return (
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
      </div>
    </div>
  );
}

export default Testimonials;
