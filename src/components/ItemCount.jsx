import React from 'react'
import { useState } from 'react'


const Contador = ({stock}) => {
const [state, setState]= useState(1)


const sumando = () => {
  if (state < stock) {
    setState(state +1 )
  } else {
    alert("llegaste a las unidades maximas que tenemos en stock")
  }
}

const restando = () => {
  if (state > 1 ) {
    setState(state -1 )
  }
}

const comprado = () => {
  // setState(state = 1);
  alert("tus productos se añadieron al carrito");
  setState(state = 1)
}
    
  return (
    <>
      <div className='div-contador' >
        <div className='botones-contador'>
          <button className='boton-contador' onClick={restando}><i className="bi bi-dash-circle-fill"></i></button> 
           <span className='contador-titulo'>{state}</span>
          <button className='boton-contador' onClick={sumando}><i className="bi bi-plus-circle-fill"></i></button> 
        </div>

          <button className='boton-comprador' onClick={comprado}>añadir al carrito</button>
      </div>
    </>
  )
}

export default Contador