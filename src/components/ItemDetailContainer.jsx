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
       setProducto(res.filter((prod) => prod.id == id))
        
    })
    
    },[]);
    
   

  return (
    <>
  
  
  {  producto.map((prod)=>{
  return (
    <ItemDetail
    key={prod.id}
    id={prod.id}
    nombre={prod.nombre}
    descripcion={prod.descripcion}
    imagen={prod.imagen}
    precio={prod.precio}
    stock={prod.stock}
    />
    
    
  )
})  } 
  
    </>
  )
}


export default ItemDetailContainer