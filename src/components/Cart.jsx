import React, {useContext} from 'react'
import {CartContext} from '../context/ShoppingCartProvider'


const Cart = () => {
  const {carrito, cantidad} = useContext(CartContext);
  return (
    <div>
        {  carrito.map((prod)=>{
  return (
  
    <idv key={prod.id}>
    <h1>{prod.nombre}</h1>
    <h1>{prod.descripcion}</h1>
    <h1>Precio: ${prod.precio}</h1>
    <h1>Cantidad: {prod.unidades}</h1>
    <h1>Valor total: ${prod.total}</h1>
    </idv>
    )
})  } 

  <h4>Cantidad de productos: {cantidad}</h4>
    </div>
  )
}

export default Cart