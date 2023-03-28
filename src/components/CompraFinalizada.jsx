import React, { useContext } from 'react'
import {CartContext} from '../context/ShoppingCartProvider'

const CompraFinalizada = ({orderId}) => {
  const {compraFinalizada} = useContext(CartContext);

compraFinalizada()
  

  return (
    <div>
      <h1 className='parrafo-final'>
        felicidades has realizado correctamente la compra tu número de seguimiento es <span className='codigo-final'>{orderId}</span>
      </h1>
    </div>
  )
}

export default CompraFinalizada