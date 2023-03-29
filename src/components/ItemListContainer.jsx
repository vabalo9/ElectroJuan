import React from "react";
import ItemList from "./ItemList";
import {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import Example from './ComponenteDeEspera'
import {collection, getDocs, getFirestore} from "firebase/firestore"


const ItemListContainer = () => {

  const [productos, setProductos] = useState([])
  const[espera, setEspera] = useState(true)
  const { categoria } = useParams();
  const { marca } = useParams();



    useEffect(() =>{
        const db = getFirestore();
        const itemsCollection = collection(db, "tecnologia");
        getDocs(itemsCollection).then((snapshot)=>{ 
        const productos = snapshot.docs.map((doc)=>({
        ...doc.data(),
        id: doc.id,
        }))
        setProductos(productos);
        setEspera(false);
      });
    }, [])

    const filtroCategorias= productos.filter((producto)=>producto.categoria===categoria)
    const filtroMarcas= productos.filter((producto)=>producto.marca==marca)
    console.log(productos.map((doc)=>doc.marca))
    console.log(marca)
    console.log(categoria)


    

  if (espera) {
    return <Example />
   }

   if (marca) {
    return <ItemList productos={filtroMarcas} />
   }

return <>
      <h3 className="titulo-productos">{categoria}</h3>
       {categoria ? <ItemList productos={filtroCategorias} /> : <ItemList productos={productos} />}
      
   
    </>
}
export default React.memo(ItemListContainer)