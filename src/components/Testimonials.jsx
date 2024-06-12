import { CardGroup, Card } from 'react-bootstrap';
import "../App.css";

function Testimonials() {
  return (
    <div className='testimonials'>
      <div className='container'>
        <h3 className='text-light mb-5 pt-5'>TESTIMONIOS</h3>
        <CardGroup className="row">
          <div className="col-sm-12 col-md-4 mb-4">
            <Card>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-sm-12 col-md-4 mb-4">
            <Card>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-sm-12 col-md-4 mb-4">
            <Card>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
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
