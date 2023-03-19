import { useParams } from "react-router-dom";
import { useState, useEffect} from "react";
import Data from "../data.json"
import ItemDetail from "./ItemDetail";


const ItemDetailContainer = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState([])



  useEffect(()=>{
    const pedirProductos = () => {
      return new Promise((resolve) => {
        setTimeout (()=>{
          resolve(Data);
  
          }, 1000);
      });
    };
    
    pedirProductos()
      .then((res) =>{
       setProducto(res.find((prod) => prod.id == id))
        
    })
    
    },[]);
    
   

  return (
    <>
    <ItemDetail
    key={producto.id}
    id={producto.id}
    nombre={producto.nombre}
    descripcion={producto.descripcion}
    imagen={producto.imagen}
    precio={producto.precio}
    stock={producto.stock}
    />
    </>
  )
}


export default ItemDetailContainer