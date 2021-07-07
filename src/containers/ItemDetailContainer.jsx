import React, { Fragment, useEffect, useState } from "react";
import { getItem } from "../utils/utils";
import ShowItem from "../components/ShowItem/ShowItem";
import { useParams } from "react-router-dom";

export default function ItemDetailContainer() {
    let [products, setProducts] = useState([]);
    const {producto} = useParams
    useEffect(() => {
      const waitForData = async () => {
        let data = await getItem(producto);
        setProducts(data);
      };
  
      waitForData();
    }, []);
  
    console.log("Todo Ok")
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
  
  