import React, { useContext } from 'react'
import {CartContext} from '../context/ShoppingCartProvider'
import { Link } from 'react-router-dom'

const CompraFinalizada = ({orderId}) => {
  const {compraFinalizada} = useContext(CartContext);

compraFinalizada()
  

  return (
    <div>
      <h1 className='parrafo-final'>
        felicidades has realizado correctamente la compra! <i className="bi bi-emoji-smile-fill"></i> <br></br>
        tu número de seguimiento es <span className='codigo-final'>{orderId}</span>
      </h1>

      <h4>para volver a la página principal has click <Link to={`/`}>aqui</Link></h4>
      
    </div>
  )
}

export default CompraFinalizada