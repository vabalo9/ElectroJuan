import React from 'react'
import Example from './ComponenteDeEspera'
import ItemListContainer from './ItemListContainer'

const Welcome = ({greeting}) => {
  return <>
   
  <div className="container">
        {greeting}
        <span className="logo2">&nbsp;TecnoJuan</span>
    </div>
    
    <h3 className="titulo-productos">Nuestros productos mas comprados</h3>
     < ItemListContainer /> 
  </>
    
  
}

export default Welcome