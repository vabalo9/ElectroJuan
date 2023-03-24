import React from 'react'
import { useParams } from "react-router-dom";
import { useState, useEffect} from "react";
import Data from "../data.json"
import ItemDetail from "./ItemDetail";
import Example from './ComponenteDeEspera'


const ItemDetailContainer = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState([])
  const[espera, setEspera] = useState(true)



  useEffect(()=>{
    const pedirProductos = () => {
      return new Promise((resolve) => {
        setTimeout (()=>{
          setEspera(false)
          resolve(Data);
  
          }, 1000);
      });
    };
    
    pedirProductos()
      .then((res) =>{
       setProducto(res.find((prod) => prod.id == id))
        
    })
    
    },[]);
    
   if (espera) {
    return <Example />
   }

  return (
    <>
    <ItemDetail
    key={producto.id}
    id={producto.id}
    nombre={producto.nombre}
    descripcion={producto.descripcion}
    imagen={producto.imagen}
    precio={producto.precio}
    stock={producto.stock}
    />
    </>
  )
}


export default React.memo(ItemDetailContainer)