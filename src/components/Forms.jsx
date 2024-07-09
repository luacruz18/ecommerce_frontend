import React, { useState } from "react";
import { Button, Col, Form, Row, Card, Container } from "react-bootstrap";

function Forms() {
  const [billingToCompany, setBillingToCompany] = useState(false);
  const handleBillingToCompanyChange = (e) => {
    setBillingToCompany(e.target.checked);
  };

  return (
    <Container>
      <Row className="mt-3">
        <Col md={6}>
          <Form>
            <Card>
              <Card.Header className="datos-card" as="h4">
                Datos de Facturación
              </Card.Header>
              <Card.Body>
                <Form.Group className="mb-3" controlId="Nombre">
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control type="text" placeholder="Nombre" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="Apellido">
                  <Form.Label>Apellido</Form.Label>
                  <Form.Control type="text" placeholder="Apellido" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="Documento">
                  <Form.Label>Documento</Form.Label>
                  <Form.Select defaultValue="">
                    <option value="" disabled>
                      Seleccione un documento
                    </option>
                    <option value="Cedula">Cédula de Identidad</option>
                    <option value="Pasaporte">Pasaporte</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="NumerodeDoc">
                  <Form.Label>Número de Documento</Form.Label>
                  <Form.Control type="text" placeholder="Documento" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="Contacto">
                  <Form.Label>Contacto</Form.Label>
                  <Form.Control type="text" placeholder="Contacto" />
                </Form.Group>

                <p>
                  *El número de contacto lo solicitamos para poder comunicarnos
                  ante cualquier duda o inconveniente*
                </p>

                <Form.Group className="mb-3" controlId="Departamento">
                  <Form.Label>Departamento</Form.Label>
                  <Form.Select defaultValue="">
                    <option value="" disabled>
                      Seleccione un departamento
                    </option>
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
                    <option>Río Negro</option>
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

                <Form.Group className="mb-3" controlId="CodigoPostal">
                  <Form.Label>Código Postal</Form.Label>
                  <Form.Control type="text" placeholder="Código Postal" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="Apto">
                  <Form.Label>Apto 01 / Casa</Form.Label>
                  <Form.Control type="text" placeholder="Apto 01 / Casa" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="Direccion">
                  <Form.Label>Dirección</Form.Label>
                  <Form.Control type="text" placeholder="Dirección" />
                </Form.Group>

                <Form.Group className="mb-3 mt-2" controlId="billingToCompany">
                  <Form.Check
                    type="checkbox"
                    label="Sí, necesito facturar a nombre de una empresa."
                    onChange={handleBillingToCompanyChange}
                  />
                </Form.Group>

                {billingToCompany && (
                  <Form.Group className="mb-3" controlId="RUT">
                    <Form.Label>RUT</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                )}

                <Form.Group className="mb-3" controlId="ExtraInfo">
                  <Form.Label>
                    Detalla información extra de utilidad para entregar tu
                    paquete.
                  </Form.Label>
                  <Form.Control as="textarea" rows={3} />
                </Form.Group>
              </Card.Body>
            </Card>

            <Button
              className="button mt-1 w-25 btn-sm"
              variant="secondary"
              type="submit"
            >
              Siguiente
            </Button>

            <Form.Group className="mb-3 mt-2" controlId="termsAndConditions">
              <Form.Check
                type="checkbox"
                label="Estoy de acuerdo con los términos y condiciones."
              />
            </Form.Group>
          </Form>
        </Col>

        <Col md={6}>
          <Card>
            <Card.Header className="datos-card" as="h4">
              Detalle del pedido
            </Card.Header>
            <Card.Body>
              <p>example.mail@gmail.com</p>
              <div className="mt-3 btn-sm">
                <Button
                  className="button mt-1 w-25 btn-sm"
                  variant="secondary btn-sm"
                >
                  Cuenta
                </Button>
              </div>
              <h6>Total de importe : $12.500</h6>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Forms;
