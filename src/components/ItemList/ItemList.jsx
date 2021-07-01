import React, { Fragment, useEffect, useState } from "react";
//import Item from "../Item/Item";
import { getData } from "../../utils/utils";
import CardComponent from "../CardComponent/CardComponent";

export default function ItemList() {
  let [products, setProducts] = useState([]);

  useEffect(() => {
    const waitForData = async () => {
      let data = await getData("smartphones");
      let aux = data.map((element) => {
        return {
          name: element.title,
          img: element.thumbnail,
          price: element.price,
          stock: element.available_quantity,
        };
      });
      setProducts(aux);
    };

    waitForData();
  }, []);

  return (
    <Fragment>
      {products.map((element, index) => {
        return (
          <Fragment key={index}>
            <CardComponent
              name={element.name}
              img={element.img}
              price={element.price}
              stock={element.stock}
            />
          </Fragment>
        );
      })}
    </Fragment>
  );
}
