import React from "react";
import CardComponent from "../CardComponent/CardComponent";

export default function Item(props) {
  return (
    <CardComponent
      name={props.name}
      img={props.img}
      descripcion={props.descripcion}
      price={props.price}
      stock={props.stock}
    />
  );
}
