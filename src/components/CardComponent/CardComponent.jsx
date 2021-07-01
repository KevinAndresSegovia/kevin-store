import React from "react";
import { Card, Col } from "react-bootstrap";
import { Counter } from "../counter/Counter";
export default function CardComponent({ name, img, descripcion, price, stock }) {
  return (
    <Col sm={4}>
    <Card >
      <Card.Header className="text-center">{name}</Card.Header>
      <Card.Img variant="top"src={img}/>
        <Card.Body>
          <Card.Text>{descripcion}</Card.Text>
          <Card.Text>Precio: ${price}</Card.Text>
          <Card.Text>Stock: {stock}</Card.Text>
          <Counter stock={stock} />
        </Card.Body>
      </Card>
    </Col>
  );
}
