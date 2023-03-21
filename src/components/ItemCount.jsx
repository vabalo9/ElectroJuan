import React, { useContext } from 'react'
import { useState } from 'react'
import {CartContext} from '../context/ShoppingCartProvider'


const Contador = ({id, imagen, precio, nombre, stock}) => {
const {añadirCarrito, compra} = useContext(CartContext);
const [unidades, setUnidades]= useState(1)

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


return (
  <>
      <div className='div-contador' >
        <div className='botones-contador'>
          <button className='boton-contador' onClick={restando}><i className="resta-itemcount bi bi-dash-circle-fill"></i></button> 
           <span className='contador-titulo'>{unidades}</span>
          <button className='boton-contador' onClick={sumando}><i className="suma-itemcount bi bi-plus-circle-fill"></i></button> 
        </div>

          <button className='boton-comprador' onClick={()=> añadirCarrito({id, imagen, precio, nombre, unidades, stock})}>{compra}</button>
      </div>
    </>
  )
}

export default Contador