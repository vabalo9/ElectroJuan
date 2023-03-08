import { useParams } from "react-router-dom";
import { useState } from "react";

const ProductDetail = ({Data}) => {
  const { id } = useParams();
  console.log(id)
   const [producto, setProducto] = useState([]);
  
   setProducto(Data);
  
  console.log(producto)
  const productoFilter = producto.filter((prod) => prod.id == id);

return (
  <>
    {productoFilter.map((prod) => (
      <div key={prod.id}>
        <h3>{prod.nombre}</h3>
        <p>{prod.descripcion}</p>
      </div>
    ))}
  </>
);

    }


export default ProductDetail