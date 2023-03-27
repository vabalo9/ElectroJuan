import { ChakraProvider } from '@chakra-ui/react'
import './style.css'
import { Routes, Route } from 'react-router-dom'
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Cart from './components/Cart'
import ItemDetailContainer from './components/ItemDetailContainer'
import Welcome from './components/Welcome'
import {CartContext} from './context/ShoppingCartProvider'
import { useContext } from "react";
import CarritoVacio from './components/CarritoVacio'
import SendOrder from './components/SendOrder'
import CompraFinalizada from './components/CompraFinalizada'



function App()  {
  const {carrito, order}= useContext(CartContext) 
  
  
    console.log(order)
    
  
  
  return (  
    <>
      
      <ChakraProvider> 
    <NavBar/>


    <Routes>
      < Route exact path="/" element={<Welcome greeting={"Bienvenidos a"} />} />
      < Route exact path="/cart" element={carrito.length !=0 ? <Cart /> : <CarritoVacio/>} />
      <Route exact path='/formulario-de-compra' element={order== true? <CompraFinalizada /> : <SendOrder /> } />
      < Route exact path="product/:id" element={<ItemDetailContainer />} />
      <Route exact path='/categoria/:categoria' element={<ItemListContainer />} />
      </Routes>

    <Footer />
     </ChakraProvider>
      
    </>
  )
} 

export default App
