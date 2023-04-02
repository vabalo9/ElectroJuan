import React from 'react'
import ItemCount from "./ItemCount";

const ItemDetail = ({ id, imagen, descripcion, precio, nombre, stock}) => {
  
  return (
    <>


        <div key={id}>
          
          <div className='contenido-ItemDetail'>
                <img className='imagen-itemDetail' src={imagen} />  
              
                <div className='texto-ItemDetail'>
                  <div className='texto-ItemDetail2'>
                    <h1 className='titulo-ItemDetail'>{nombre}</h1>
                    <p className='descripcion-ItemDetail'>{descripcion}</p>
                  </div>
                  <h3 className='precio-ItemDetail'>${(new Intl.NumberFormat('de-DE').format(precio))}</h3>
                  < ItemCount 
                      
                      id={id}
                      nombre={nombre}
                      descripcion={descripcion}
                      imagen={imagen}
                      precio={precio}
                      stock={stock}
                      />
                </div>
          </div>
        </div>
    </>
  )
}

export default ItemDetail