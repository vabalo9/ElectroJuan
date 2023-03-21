import {createContext, useState, useEffect } from "react"

export const CartContext = createContext("")



const ShoppingCartProvider = ({ children }) => {



  let [carrito, setCarrito] = useState([])

  
  
  
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

  function sumarEnCarrito(id, stock) {
    let posicionProducto = carrito.findIndex(producto => producto.id == id)
    let producto = carrito.find(producto => producto.id == id)
    console.log("la cantidad de es de " + producto.unidades)
    console.log("el stock es de " + stock)

    if (producto.unidades < stock) {


      carrito[posicionProducto] = {
        id: carrito[posicionProducto].id, img: carrito[posicionProducto].img, nombre: carrito[posicionProducto].nombre, precio: carrito[posicionProducto].precio, unidades: carrito[posicionProducto].unidades + 1, total: carrito[posicionProducto].precio * (carrito[posicionProducto].unidades + 1)
      }
      
    }else {
      alert("llegaste al maximo de unidades que tenemos en stock")
    }
    console.log(carrito[posicionProducto])
  }

  function restarEnCarrito(id) {
    let posicionProducto = carrito.findIndex(producto => producto.id == id)
    let producto = carrito.find(producto => producto.id == id)
    console.log("la cantidad de es de " + producto.unidades)

    if (producto.unidades > 1) {


      carrito[posicionProducto] = {
        id: carrito[posicionProducto].id, img: carrito[posicionProducto].img, nombre: carrito[posicionProducto].nombre, precio: carrito[posicionProducto].precio, unidades: carrito[posicionProducto].unidades - 1, total: carrito[posicionProducto].precio * (carrito[posicionProducto].unidades - 1)
      }
      
    }else {
      alert("Para eliminar totalmente un producto hace click en la papelera")
    }
    console.log(carrito[posicionProducto])
  }

  function eliminarProducto(id) {
    carrito = carrito.filter(prod => prod.id !=  id)

    console.log(carrito)
  }

  

  return (
      <CartContext.Provider value={{ añadirCarrito, carrito, cantidad, compra, sumarEnCarrito, restarEnCarrito, eliminarProducto}}>
        {children}
        </CartContext.Provider>
    )
  }


export default ShoppingCartProvider