import React from "react";
import { Card, Col } from "react-bootstrap";
import { getItem } from "../../utils/utils";
import { Counter } from "../counter/Counter";
export default function CardComponent({ id, name, img, descripcion, price, stock }) {
  return (
    <Col sm={4}>
    <Card >
      <Card.Header className="text-center">{name}</Card.Header>
      <Card.Img variant="top"src={img}/>
        <Card.Body>
          {console.log(typeof(id)+ " " + id)}
          <button onClick={() =>{getItem(id)}}>Info</button>
          <Card.Text>{descripcion}</Card.Text>
          <Card.Text>Precio: ${price}</Card.Text>
          <Card.Text>Stock: {stock}</Card.Text>
          <Counter stock={stock} />
        </Card.Body>
      </Card>
    </Col>
  );
}
