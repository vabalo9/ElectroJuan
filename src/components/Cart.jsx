import React, {useContext, useState} from 'react'
import {CartContext} from '../context/ShoppingCartProvider'
import { Link } from 'react-router-dom'


const Cart = () => {
  const {carrito, cantidad, sumarEnCarrito, restarEnCarrito, eliminarProducto, totales} = useContext(CartContext);
  return (
      
    <div>
      <h1 className='titulo-carrito'>Tus productos</h1>
        {  carrito.map((prod)=>{
          
      return (
    
    <div className='div-carrito' key={prod.id}>
      <div className='palabras-iconos'>
        <div className='contenido-cart'>
          <h1 className='color'>Cantidad: {prod.unidades}</h1>
          <h1 className='color'>Precio: ${prod.precio}</h1>
          <h4 className='color'>Valor total: ${prod.total}</h4>
        </div>
        <div className='botones-carrito'>
          <button className='boton-contador' onClick={()=> sumarEnCarrito(prod.id, prod.stock)}><i className="bi bi-plus-lg"></i></button> 
          <button className='boton-contador' onClick={()=> eliminarProducto(prod.id)}><i className="bi bi-trash"></i></button>
          <button className='boton-contador'onClick={()=> restarEnCarrito(prod.id,)}><i className="bi bi-dash"></i></button> 
        </div>
      </div>
      <h1 className='color titulo-producto-carrito'>{prod.nombre}</h1>
      <img className='imagen-carrito' src={prod.img} />  
    </div>
    )
    })  } 
  <div className='totales'>
    <h4 className='cantidad-carrito'>Cantidad de productos: {cantidad}</h4>
    <h4 className='cantidad-carrito'> Total: $ {totales}</h4>
  </div>
  <Link to={`/formulario-de-compra`}>
    <button className='boton-nexo efecto'>Finalizar compra</button>
  </Link>

    </div>
  )
}

export default Cart