import React from "react";
import Data from "../data.json"
import ItemList from "./ItemList";
import {useState, useEffect} from "react";
import { useParams } from "react-router-dom";


const ItemListContainer = () => {

  const [productos, setProductos] = useState([])
  const { categoria } = useParams();

  useEffect(()=>{
  const pedirProductos = () => {
    return new Promise((resolve) => {
      setTimeout (()=>{
        resolve(Data);

        }, 1000);
    });
  };
  
  pedirProductos()
    .then((res) =>{
      categoria
      ? setProductos(res.filter((producto) => producto.categoria === categoria))
      : setProductos(res);
  })
  
  },[]);

return <>
      <h3 className="titulo-productos">{categoria}</h3>
      {<ItemList productos={productos} />}
   
    </>
}
export default ItemListContainer