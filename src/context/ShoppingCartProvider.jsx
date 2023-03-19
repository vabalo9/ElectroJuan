import {createContext, useState, useEffect} from "react"

export const CartContext = createContext(null)


const ShoppingCartProvider = ({children, articulo}) => {
  const [compra, setCompra] = useState()
  useEffect(()=>{
    setCompra(articulo)
  });
  console.log(compra)
  const [cart, setCart] = useState([])
  

  return (
      <CartContext.Provider value={{cart, setCart}}>
        {children}
        </CartContext.Provider>
    )
}

export default ShoppingCartProvider