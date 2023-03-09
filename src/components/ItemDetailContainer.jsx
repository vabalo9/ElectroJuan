import { useParams } from "react-router-dom";
import { useEffect} from "react";
import Data from "../data.json"
import ItemDetail from "./ItemDetail";


const ItemDetailContainer = () => {
  const { id } = useParams();

  useEffect(()=>{
    Data
  },[]);

const productoFilter = Data.filter((prod) => prod.id == id);
  
  return (
    <>

{  productoFilter.map((prod)=>{
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