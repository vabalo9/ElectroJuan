import React from 'react'

const CompraFinalizada = ({orderId}) => {
  console.log(orderId)
  return (
    <div>
      <h1 className='titulo-carrito'>
        felicidades has realizado correctamente la compra
      </h1>
    </div>
  )
}

export default CompraFinalizada