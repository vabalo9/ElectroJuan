import React, { useContext } from 'react'
import { useState, useEffect } from 'react'
import {CartContext} from '../context/ShoppingCartProvider'


const Contador = ({id, imagen, precio, nombre, stock}) => {
const {añadirCarrito, carrito} = useContext(CartContext);
const [unidades, setUnidades]= useState(1)
const [compra, setCompra]= useState("Añadir al carrito")

const sumando = () => {
  if (unidades < stock) {
    setUnidades(unidades +1 )
  } else {
    alert("llegaste a las unidades maximas que tenemos en stock")
  }
}

const restando = () => {
  if (unidades > 1 ) {
    setUnidades(unidades -1 )
  }
}

const comprado= carrito.some((prod)=>prod.id==id)

useEffect(() =>{
  if (comprado) {setCompra("Producto añadido!")}
  
});

return (
  <>
      <div className='div-contador' >
        <div className='botones-contador invisible'>
          <button className='boton-contador' onClick={restando}><i className="resta-itemcount bi bi-dash-circle-fill"></i></button> 
           <span className='contador-titulo'>{unidades}</span>
          <button className='boton-contador' onClick={sumando}><i className="suma-itemcount bi bi-plus-circle-fill"></i></button> 
        </div>

          <button className='boton-comprador efecto' onClick={()=> añadirCarrito({id, imagen, precio, nombre, unidades, stock})}>{compra}</button>
      </div>
    </>
  )
}

export default Contador