import {createContext, useState } from "react"

export const CartContext = createContext("")



const ShoppingCartProvider = ({ children }) => {



  const [carrito, setCarrito] = useState([])

  function añadirCarrito({id, imagen, precio, nombre, unidades}) {
    const item={id:id, img:imagen, precio:precio, nombre:nombre, unidades:unidades, total:unidades*precio}
    setCarrito([...carrito, item])
    carrito.push(item)
    console.log(carrito)
  }
  
  const cantidad = carrito.reduce((acc, producto) => acc + producto.unidades, 0)

  return (
      <CartContext.Provider value={{ añadirCarrito, carrito, cantidad}}>
        {children}
        </CartContext.Provider>
    )
}

export default ShoppingCartProvider