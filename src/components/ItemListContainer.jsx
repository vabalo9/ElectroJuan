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

    const filtrado= productos.filter((producto)=>producto.categoria===categoria)



    

  if (espera) {
    return <Example />
   }

return <>
      <h3 className="titulo-productos">{categoria}</h3>
      {categoria ? <ItemList productos={filtrado} /> : <ItemList productos={productos} />}
   
    </>
}
export default React.memo(ItemListContainer)