import { useParams } from "react-router-dom";
import Data from "../data.json"
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const productoFilter = Data.filter((prod) => prod.id == id);
  
  return (
    <>
{  productoFilter.map((prod)=>{
  return (
    <div key={prod.id}>
      <h1>{prod.nombre}</h1>
    </div>
  )
})  }

{/* {  productoFilter.map((prod)=>{
  return (
    <ItemDetail
    key={prod.id}
    nombre={prod.nombre}
    descripcion={prod.descripcion}
    imagen={prod.imagen}
    />
    
    
  )
})  }  */}
  
    </>
  )
}


export default ItemDetailContainer