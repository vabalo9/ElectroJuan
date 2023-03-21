import {createContext, useState, useEffect } from "react"

export const CartContext = createContext("")



const ShoppingCartProvider = ({ children }) => {



  const [carrito, setCarrito] = useState([])

  
  
  
  const [compra, setCompra] = useState("Añadir al carrito")
  
  function añadirCarrito({id, imagen, precio, nombre, unidades, stock}) {
    let posicionProducto = carrito.findIndex(producto => producto.id == id)
    console.log(posicionProducto)
    if (posicionProducto == -1) {
      const item={id:id, img:imagen, precio:precio, nombre:nombre, unidades:unidades, total:unidades*precio, stock:stock}
      setCarrito([...carrito, item])
      carrito.push(item)
      
    } else {
      alert("Este producto ya se encuentra entre tus elegidos, si deseas mas unidades de este producto puedes indicarlo directamente en el carrito ")
    }
    
    setCompra("Añadido al carrito!")
    
  }
  
  
  const cantidad = carrito.reduce((acc, producto) => acc + producto.unidades, 0)

  function sumarEnCarrito(dato) {
    // if (cantidad < stock) {
    //   carrito.cantidad + 1
    console.log(dato)

    console.log("no hay nada mas rico y peligroso que la cocacola")
    }

  

  return (
      <CartContext.Provider value={{ añadirCarrito, carrito, cantidad, compra, sumarEnCarrito}}>
        {children}
        </CartContext.Provider>
    )
  }


export default ShoppingCartProvider