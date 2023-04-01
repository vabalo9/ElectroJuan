import {createContext, useState,} from "react"

export const CartContext = createContext("")



const ShoppingCartProvider = ({ children }) => {



  let [carrito, setCarrito] = useState([])

  
  
  
  const [compra, setCompra] = useState("Añadir al carrito")
  
  function añadirCarrito({id, imagen, precio, nombre, unidades, stock}) {
    let posicionProducto = carrito.findIndex(producto => producto.id == id)
    if (posicionProducto == -1) {
      const item={id:id, img:imagen, precio:precio, nombre:nombre, unidades:unidades, total:unidades*precio, stock:stock}
      setCarrito([...carrito, item])
      carrito.push(item)
      
    } else {
      Swal.fire('Este producto ya se encuentra entre tus elegidos, si deseas mas unidades puedes indicarlo directamente en el carrito')
    }
    
    setCompra("Añadido al carrito!")
    
  }
  
  
  
  function sumarEnCarrito(id, stock) {
    let posicionProducto = carrito.findIndex(producto => producto.id == id)
    let producto = carrito.find(producto => producto.id == id)
    if (producto.unidades < stock) {
      
      
      carrito[posicionProducto] = {
        id: carrito[posicionProducto].id, stock: carrito[posicionProducto].stock, img: carrito[posicionProducto].img, nombre: carrito[posicionProducto].nombre, precio: carrito[posicionProducto].precio, unidades: carrito[posicionProducto].unidades + 1, total: carrito[posicionProducto].precio * (carrito[posicionProducto].unidades + 1)
      }
      
    }else {
      Swal.fire('llegaste al maximo de unidades que tenemos en stock')
    }
    

     setCarrito([...carrito])

  }
  
  function restarEnCarrito(id) {
    let posicionProducto = carrito.findIndex(producto => producto.id == id)
    let producto = carrito.find(producto => producto.id == id)
    
    
    if (producto.unidades > 1) {
      
      
      carrito[posicionProducto] = {
        id: carrito[posicionProducto].id, stock: carrito[posicionProducto].stock, img: carrito[posicionProducto].img, nombre: carrito[posicionProducto].nombre, precio: carrito[posicionProducto].precio, unidades: carrito[posicionProducto].unidades - 1, total: carrito[posicionProducto].precio * (carrito[posicionProducto].unidades - 1)
      }
      
    }else {
      Swal.fire('Para eliminar un producto definitivamente hace click en la papelera')
    }
    setCarrito([...carrito])
  }
  
  function eliminarProducto(id) {
    carrito = carrito.filter(prod => prod.id !=  id)
    setCarrito([...carrito])
  }
  
  const cantidad = carrito.reduce((acc, producto) => acc + producto.unidades, 0)
  const totales = carrito.reduce((acc, producto) => acc + producto.total, 0)
  
  function compraFinalizada() {
    
    setCarrito([])
  }

  return (
    <CartContext.Provider value={{ añadirCarrito, carrito, cantidad, totales, compra, sumarEnCarrito, restarEnCarrito, eliminarProducto, compraFinalizada}}>
        {children}
        </CartContext.Provider>
    )
  }


export default ShoppingCartProvider