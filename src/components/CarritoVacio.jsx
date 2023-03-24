import React from 'react'

const CarritoVacio = () => {
  return (
    <div>
        <p className='parrafo-carrito-vacio'>En este momento tu carrito se encuentra vacio, 
            agrega los productos que quieras para realizar una compra
        </p>
        
         <i className="bi bi-cart-x-fill"></i> 
    </div>
  )
}

export default CarritoVacio