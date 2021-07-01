import React from "react";
import { NavBar } from "./components/navbar/NavBar";
import { Container, Row } from "react-bootstrap";
//import ItemListContainer from "./containers/ItemListContainer";
import ItemDetailContainer from "./containers/ItemDetailContainer";

export function App() {
  return (
    <div>
      <NavBar />
      <Container>
        <Row>
          {/* <ItemListContainer /> */}
          <ItemDetailContainer />
        </Row>
      </Container>
    </div>
  );
}
