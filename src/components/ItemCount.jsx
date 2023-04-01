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
    Swal.fire('No contamos con mas stock en este producto')
    

    useEffect(() =>{
      if (comprado) {setCompra("Producto añadido!")}
      
    });
    
  }
}

const restando = () => {
  if (unidades > 1 ) {
    setUnidades(unidades -1 )
  }
}

const comprado= carrito.some((prod)=>prod.id==id)


  


return (
  <>
      <div className='div-contador' >
        <div className={comprado ? 'invisible':'botones-contador'}>
          <button className='boton-contador' onClick={restando}><i className="resta-itemcount bi bi-dash-circle-fill"></i></button> 
           <span className='contador-titulo'>{unidades}</span>
          <button className='boton-contador' onClick={sumando}><i className="suma-itemcount bi bi-plus-circle-fill"></i></button> 
        </div>

          <button className={comprado ? 'boton-comprado':'boton-comprador efecto'} onClick={()=> añadirCarrito({id, imagen, precio, nombre, unidades, stock})}>{compra}</button>
      </div>
    </>
  )
}

export default Contador