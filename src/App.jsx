import { ChakraProvider } from '@chakra-ui/react'
import './style.css'
import { Routes, Route } from 'react-router-dom'
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Cart from './components/Cart'
import ProductDetail from './components/ProductDetail'


function App()  {
    return (  
      <>
      <ChakraProvider> 

    <NavBar/>

    <Routes>
      < Route exact path="/" element={<ItemListContainer greeting={"Bienvenidos a"} />} />
      < Route exact path="/cart" element={<Cart />} />
      < Route exact path="product/:id" element={<ProductDetail />} />
      </Routes>

    <Footer />

     </ChakraProvider>
    </>
  )
} 

export default App
