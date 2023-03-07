import React from 'react'
import Item from "./Item";



const ItemList = ({productos}) => {
  return (
    <>

  <div className="container-products"> 

{  productos.map((prod)=>{
  return (
  <Item
  key={prod.id}
  id={prod.id}
  imagen={prod.imagen}
  descripcion={prod.descripcion}
  precio={prod.precio}
  nombre={prod.nombre}
  />
  ) 
})  }
</div>    
    </>
  )
}

export default ItemList