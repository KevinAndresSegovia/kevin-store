import React, { Fragment, useEffect, useState } from "react";
import { getData } from "../utils/utils";
import ShowItem from "../components/ShowItem/ShowItem";

export default function ItemDetailContainer() {
    let [products, setProducts] = useState([]);

    useEffect(() => {
      const waitForData = async () => {
        let data = await getData("smartphones");
        let aux = data[4]
        setProducts(aux);
      };
  
      waitForData();
    }, []);
  
    return (
      <Fragment>
              <ShowItem
                name={products.title}
                img={products.thumbnail}
                price={products.price}
                stock={products.available_quantity}
              />
            </Fragment>
    );
  }
  
  