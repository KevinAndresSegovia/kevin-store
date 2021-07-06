import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import {
  Nav,
  Navbar,
  NavDropdown,
  Form,
  FormControl,
  Button,
  InputGroup,
} from "react-bootstrap";
import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";

export function NavBar() {
  return (
    <Navbar
      className="menu_expandir"
      bg="dark"
      variant="dark"
      sticky="top"
      expand="sm"
      collapseOnSelect
    >
      <Navbar.Brand href="/">
        <img className="App-logo" src={"/img/logo.svg"} alt="Logo" />{" "}
        ReactLibre
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <nav>
          <NavDropdown title="Categorias">
            <Nav.Link href="/ItemListContainer/smartphones">
              Smartphones
            </Nav.Link>
            <Nav.Link href="/ItemListContainer/notebooks">
              Notebooks
            </Nav.Link>
            <Nav.Link href="/ItemListContainer/tablets">
              Tablets
            </Nav.Link>
            <Nav.Link href="/ItemListContainer/Accesorios+para+Celulares">
              Accesorios
            </Nav.Link>
          </NavDropdown>
        </nav>
        <Form inline>
          <InputGroup>
            <FormControl
              type="text"
              placeholder="Buscar producto"
              className="mr-sm-2"
            />
            <Button variant="outline-success">Buscar</Button>
          </InputGroup>
        </Form>
      </Navbar.Collapse>

      <CartWidget />
    </Navbar>
  );
}
export default NavBar;
