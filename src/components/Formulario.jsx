import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

function Formulario() {
  return (
    <div>
      <Form>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="Nombre">
            <Form.Label> </Form.Label>
            <Form.Control type="text" placeholder="Nombre" />
          </Form.Group>

          <Form.Group as={Col} controlId="Apellido">
            <Form.Label></Form.Label>
            <Form.Control type="text" placeholder="Apellido" />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="Documento">
            <Form.Label></Form.Label>
            <Form.Select defaultValue="Documento">
              <option>Cedula de Identidad</option>
              <option>Pasaporte</option>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} controlId="Contacto">
            <Form.Label></Form.Label>
            <Form.Control type="text" placeholder="Contacto" />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label></Form.Label>
            <Form.Select defaultValue="Departamento">
              <option>Artigas</option>
              <option>Salto</option>
              <option>Paysandú</option>
              <option>Rio Negro</option>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} controlId="Numero de Puerta">
            <Form.Label></Form.Label>
            <Form.Control type="numbers" placeholder="Dirección" />
          </Form.Group>

          <Form.Group as={Col} controlId="Apto">
            <Form.Label></Form.Label>
            <Form.Control type="text" placeholder="Apto 01 / Casa" />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridAddress2">
          <Form.Label>Address 2</Form.Label>
          <Form.Control placeholder="Apartment, studio, or floor" />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Control />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Zip</Form.Label>
            <Form.Control />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" id="formGridCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Formulario;
