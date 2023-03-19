import ShoppingCartProvider from './context/ShoppingCartProvider'
import { ChakraProvider } from '@chakra-ui/react'
import './style.css'
import { Routes, Route } from 'react-router-dom'
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Cart from './components/Cart'
import ItemDetailContainer from './components/ItemDetailContainer'
import Welcome from './components/Welcome'
import Carrito from './components/Carrito'



function App()  {

  
  
    return (  
      <>
      <ShoppingCartProvider>
      <ChakraProvider> 

    <NavBar/>


    <Routes>
      < Route exact path="/" element={<Welcome greeting={"Bienvenidos a"} />} />
      < Route exact path="/cart" element={<Cart />} />
      < Route exact path="product/:id" element={<ItemDetailContainer />} />
      <Route exact path='/categoria/:categoria' element={<ItemListContainer />} />
      </Routes>

    <Footer />
     </ChakraProvider>
     </ShoppingCartProvider> 
    </>
  )
} 

export default App
