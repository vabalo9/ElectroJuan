import React from 'react'




const ItemList = ({productos}) => {
  
  return (
    <>

  <div className="container-products"> 

{  productos.map((prod)=>{
  <Item
  key={prod.id}
  id={prod.id}
  imagen={prod.imagen}
  descripcion={prod.descripcion}
  precio={prod.precio}
  nombre={prod.nombre}
  />

})  }

</div>    
    </>
  )
}

export default ItemList