import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'
import { ChakraProvider } from '@chakra-ui/react'
import './style.css'

function App()  {
    return (  
      <>
      <ChakraProvider> 
      <NavBar/>
      <ItemListContainer greeting={"Bienvenidos a"} />
     </ChakraProvider>
    </>
  )
} 

export default App
