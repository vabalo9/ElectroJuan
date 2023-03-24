import React from "react";
import Data from "../data.json"
import ItemList from "./ItemList";
import {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import Example from './ComponenteDeEspera'


const ItemListContainer = () => {

  const [productos, setProductos] = useState([])
  const[espera, setEspera] = useState(true)
  const { categoria } = useParams();

  useEffect(()=>{
  const pedirProductos = () => {
    return new Promise((resolve) => {
      setTimeout (()=>{
        setEspera(false)
        resolve(Data);

        }, 5000);
    });
  };
  
  pedirProductos()
    .then((res) =>{
      categoria
      ? setProductos(res.filter((producto) => producto.categoria === categoria))
      : setProductos(res);
  })
  
  },[categoria]);

  if (espera) {
    return <Example />
   }

return <>
      <h3 className="titulo-productos">{categoria}</h3>
      {<ItemList productos={productos} />}
   
    </>
}
export default React.memo(ItemListContainer)