import React, { useState } from "react";
import { Button, Col, Form, Row, Card, Container } from "react-bootstrap";
import { removeItem, clearCart } from "../redux/cartSlice";
import Swal from "sweetalert2";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

function Forms() {
  const [billingToCompany, setBillingToCompany] = useState(false);
  const handleBillingToCompanyChange = (e) => {
    setBillingToCompany(e.target.checked);
  };

  const cartItems = useSelector((state) => state.cart.items);
  const token = useSelector((state) => state.user.token);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (itemId) => {
    dispatch(removeItem(itemId));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  let subtotal = 0;
  let tax = 0;
  let total = 0;

  if (cartItems.length > 0) {
    subtotal = cartItems.reduce((total, item) => {
      const itemPrice = item.price || 0; //  item.price es undefined asigna 0
      const itemQuantity = item.quantity || 1; // item.quantity undefine asigna 1

      return total + itemPrice * itemQuantity;
    }, 0);

    tax = 1.22 * subtotal;
    total = subtotal + tax;
  }

  const handleOrder = async () => {
    console.log("handleOrder");
    try {
      await axios("http://localhost:3000/orders", {
        method: "POST",
        data: "hola",
        headers: { Authorization: `Bearer ${token}` },
      });

      Swal.fire({
        title: "Tu compra se ha realizado de manera exitosa.",
        text: " ¡Te esperamos pronto!",
        icon: "success",
        confirmButtonColor: "#E93D3A",
        color: "Black",
      });
    } catch (err) {
      // Swal.fire({
      // icon: "error",
      // title: "Oops...",
      // text: "Something went wrong!",
      // footer: '<a href="#">Why do I have this issue?</a>'
      //});
      console.error(err);
    }
  };

  return (
    <Container>
      <Row className="mt-3 pt-4">
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
          </Form>
        </Col>

        <Col md={6}>
          <Card>
            <Card.Header className="datos-card" as="h4">
              Detalle del pedido
            </Card.Header>
            <Card.Body>
              <p>example.mail@gmail.com</p>
              {cartItems.map((item) => (
                <div key={item.id} className="card mb-3">
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img
                        src={import.meta.env.VITE_IMG_URL + item.pic}
                        className="img-fluid rounded-start"
                        alt={item.name}
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">{item.name}</h5>
                        <p className="card-text">Precio: ${item.price}</p>
                        {item.quantity > 1 && (
                          <p className="card-text">Cantidad: {item.quantity}</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              <div className="col-md-6">
                <div className="card-body">
                  <h5 className="card-title">Resumen del Pedido</h5>
                  <p className="card-text">Subtotal: ${subtotal.toFixed(2)}</p>
                  <p className="card-text">Impuestos: ${tax.toFixed(2)}</p>
                  <h3 className="card-text">Total: ${total.toFixed(2)}</h3>
                </div>
              </div>
            </Card.Body>
          </Card>
          <Button
            className=" col-6 button mt-3 w-25 btn-sm"
            variant="secondary"
            type="submit"
            onClick={() => handleOrder()}
          >
            Finalizar Compra
          </Button>

          <Form.Group className="mb-3 mt-2" controlId="termsAndConditions">
            <Form.Check
              type="checkbox"
              label="Estoy de acuerdo con los términos y condiciones."
            />
          </Form.Group>
        </Col>
      </Row>
    </Container>
  );
}

export default Forms;
