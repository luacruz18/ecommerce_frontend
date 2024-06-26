import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";

function Formulario() {
  return (
    <div className="form-container col-6 ml">
      <Form>
        <Card>
          <Card.Header className="datos-card" as="h4">
            Datos de Facturación
          </Card.Header>
          <Card.Body></Card.Body>{" "}
          <Row className="mb-6">
            <Form.Group as={Col} controlId="Nombre">
              <Form.Label> </Form.Label>
              <Form.Control type="text" placeholder="Nombre" />
            </Form.Group>

            <Form.Group as={Col} controlId="Apellido">
              <Form.Label></Form.Label>
              <Form.Control type="text" placeholder="Apellido" />
            </Form.Group>
          </Row>
          <Row className="mb-6">
            <Form.Group as={Col} controlId="Documento">
              <Form.Label></Form.Label>
              <Form.Select defaultValue="Documento">
                <option>Cedula de Identidad</option>
                <option>Pasaporte</option>
              </Form.Select>
            </Form.Group>
            <Form.Group as={Col} controlId="NumerodeDoc">
              <Form.Label></Form.Label>
              <Form.Control type="numbers" placeholder="Documento" />
            </Form.Group>

            <Form.Group as={Col} controlId="Contacto">
              <Form.Label></Form.Label>
              <Form.Control type="text" placeholder="Contacto" />
            </Form.Group>
          </Row>
          <p>
            *El número de contacto lo solícitamos para poder comunicarnos ante
            cualquier duda o inconveniente*
          </p>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridState">
              <Form.Label></Form.Label>
              <Form.Select defaultValue="Departamento">
                <option>Artigas</option>
                <option>Canelones</option>
                <option>Cerro Largo</option>
                <option>Colonia</option>
                <option>Durazno</option>
                <option>Flores</option>
                <option>Florida</option>
                <option>Lavalleja</option>
                <option>Maldonado</option>
                <option>Montevideo</option>
                <option>Rio Negro</option>
                <option>Rivera</option>
                <option>Rocha</option>
                <option>Paysandú</option>
                <option>Salto</option>
                <option>San José</option>
                <option>Soriano</option>
                <option>Treinta y Tres</option>
                <option>Tacuarembó</option>
              </Form.Select>
            </Form.Group>

            <Form.Group as={Col} controlId="Numero de Puerta">
              <Form.Label></Form.Label>
              <Form.Control type="numbers" placeholder="Código Postal" />
            </Form.Group>
            <Form.Group as={Col} controlId="Apto">
              <Form.Label></Form.Label>
              <Form.Control type="text" placeholder="Apto 01 / Casa" />
            </Form.Group>
          </Row>
          <Form.Group as={Col} controlId="Numero de Puerta">
            <Form.Label></Form.Label>
            <Form.Control type="numbers" placeholder="Dirección" />
          </Form.Group>
          <Form.Group
            className="mb-3"
            id="formGridCheckbox"
            placeholder="¿Necesitas Factura con RUT?"
          >
            <Form.Check
              type="checkbox"
              label="Si, necesito facturar a nombre de una empresa."
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>RUT</Form.Label>
            <Form.Control />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>
              {" "}
              Detalla información extra de útilidad para entregar tu paquete.
            </Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
        </Card>

        <Button className="button-envio" variant="primary" type="submit">
          Siguiente
        </Button>
        <Form.Group className="mb-3" id="formGridCheckbox">
          <Form.Check
            type="checkbox"
            label="Estoy de acuerdo con los términos y condiciones."
          />
        </Form.Group>
      </Form>
    </div>
  );
}

export default Formulario;
