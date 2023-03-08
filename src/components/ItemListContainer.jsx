import React from "react";
import Data from "../data.json"
import ItemList from "./ItemList";
import {useState} from "react";
import { useParams } from "react-router-dom";


const ItemListContainer = () => {

  const [productos, setProductos] = useState([])
  const { categoria } = useParams();

  const pedirProductos = () => {
    return new Promise((resolve) => {
      setTimeout (()=>{
        resolve(Data);

        }, 3000);
    });
  };

  pedirProductos()
    .then((res) =>{
      setProductos(res)
  })
  
  const catFilter = productos.filter((producto) => producto.categoria === categoria);
  

  
    return <>
      <h3 className="titulo-productos">{categoria}</h3>
      {categoria ? <ItemList productos={catFilter} /> : <ItemList productos={productos} />}
   
    </>
}
export default ItemListContainer