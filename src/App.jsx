import { ChakraProvider } from '@chakra-ui/react'
import './style.css'
import { Routes, Route } from 'react-router-dom'
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Cart from './components/Cart'
import ProductDetail from './components/ProductDetail'
import Welcome from './components/Welcome'
import Data from "./data.json"


function App()  {
  console.log(Data)
    return (  
      <>
      <ChakraProvider> 

    <NavBar/>

    <Routes>
      < Route exact path="/" element={<Welcome greeting={"Bienvenidos a"} />} />
      < Route exact path="/cart" element={<Cart />} />
      < Route exact path="product/:id" element={<ProductDetail />} />
      <Route exact path='/categoria/:categoria' element={<ItemListContainer Data={Data} />} />
      </Routes>

    <Footer />

     </ChakraProvider>
    </>
  )
} 

export default App
