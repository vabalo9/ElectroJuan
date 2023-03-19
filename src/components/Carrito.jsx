import React from 'react'
import { useState} from "react"

import {CartContext} from '../context/ShoppingCartProvider'
import { useContext } from "react";

const Carrito = () => {
    const {arrayCarrito}= useContext(CartContext)
    
    const [carrito, setCarrito] = useState([])
    setCarrito(arrayCarrito)
  return (
    <>
    {  carrito.map((prod)=>{
  return (
  
  <div key={prod.id}>
  
  
  <h3>{prod.precio}</h3>
  <h4>{prod.nombre}</h4>
  </div>
  ) 
})  }
    </>
  )


   
}

export default Carrito